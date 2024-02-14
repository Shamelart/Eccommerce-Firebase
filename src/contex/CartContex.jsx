import { useState, createContext } from "react";
import { db } from "../firebaseConfig";
import { addDoc, collection, deleteDoc } from "firebase/firestore";
import useUpdateDocument from "../hooks/useUpdateDocument";
export const CartContex = createContext();

const CartContexProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const updateStock = useUpdateDocument();

  // agregar Carrito
  // eliminar del carrito
  // el precio total del carrito
  // ver el total de productos agregados (para verlo en la borbuja del carrito en el nav)
  // limpiar carrito
  // comprar
  //control para no agregar mas que el stock

  const rechargeCart = () => {
    const cartStorage = localStorage.getItem('cart');
    setCart(JSON.parse(cartStorage));
  };

  const addProductCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      const newCart = cart.map((item) => {
        if (
          item.id === product.id &&
          item.stock > product.cantidad + item.cantidad
        ) {
          return {
            ...item,
            cantidad: item.cantidad + product.cantidad,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const getTotalProducts = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
    const totalProducts = cart.reduce((acc, product) => {
      return acc + product.cantidad;
    }, 0);
    return totalProducts;
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((acc, product) => {
      return acc + product.cantidad * product.precioVenta;
    }, 0);
    return totalPrice;
  };

  const deleteProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const deleteDocument = async (product) => {
    await deleteDoc(db, product.categoria, product.id)
  }

  const clearCart = () => {
    setCart([]);
  };

  const buyProduct = () => {
    cart.forEach(async (product) => {
      const newStock = product.stock - product.cantidad;
      await updateStock(product.id, product.categoria, newStock);
      const  { stock, ...temp } = product
      await addDoc(collection(db, "Pedidos"), temp);      
    });
  };



  const data = {
    cart,
    rechargeCart,
    addProductCart,
    getTotalProducts,
    getTotalPrice,
    deleteProduct,
    deleteDocument,
    clearCart,
    buyProduct,

  };

  return <CartContex.Provider value={data}>{children}</CartContex.Provider>;
};

export default CartContexProvider;
