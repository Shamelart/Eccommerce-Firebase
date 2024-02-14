import ClockLoader from "react-spinners/ClockLoader";
import CardProduct from "./CardProduct";
import { Grid } from "@mui/material";
import useCollection from "../hooks/useCollection";

export default function ContainCard() {
  const { loading, products } = useCollection();
  /*
  getDocs para todos los documentos
  getDoc para un solo documento
  setDoc
  addDoc para agregar un documento
  updateDoc para modificar un documento
  deleteDoc para eliminar un documento
  */

  return (
    <Grid
      container
      spacing={2}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "1em 10em ",
        minHeight: '100vh'
      }}
    >
      {products[0] &&
        products.map((product) => (
          <Grid key={product.id} item sm={6} md={3}>
            <CardProduct
              id={product.id}
              img={product.imagen}
              nombre={product.producto}
              descripcion={product.descripcion}
              stock={product.stock}
              precio={product.precioVenta}
            />
          </Grid>
        ))}
        <div style={{marginTop: '2.5em'}}>
      <ClockLoader
        loading={loading}
        size={80}
        color="white"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    </Grid>
  );
}
