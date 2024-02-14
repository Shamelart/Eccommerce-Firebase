import { useContext } from "react";
import { CartContex } from "../../contex/CartContex";
import CartDetail from "./CartDetail";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function CartDetailContainer() {
  const { cart, getTotalPrice, clearCart, buyProduct } = useContext(CartContex);

  return (
    <Box sx={{ bgcolor: "background.paper", display: "flex", minHeight: 'calc(100vh - 84.516px - 52px'}} key={cart.id}>
      <Grid
        container
        paddingY={2}
        marginX={2}
      >
        {cart.map((product) => (
          <CartDetail
            key={product.id}
            id={product.id}
            nombre={product.producto}
            descripcion={product.descripcion}
            img={product.imagen}
            precio={product.precioVenta}
            cantidad={product.cantidad}
          />
        ))}
      </Grid>
      <Grid container display={"flex"} justifyContent={"flex-end"} marginY={1}>
        <Grid item>
          <Typography variant="h5" marginRight={'1em'} paddingLeft={'1.3em'}>
            PRECIO TOTAL ${getTotalPrice()}
          </Typography>
          <Button
            variant="outlined"
            color="error"
            sx={{marginRight: '1em'}}
            onClick={() => clearCart()}
          >
            Limpiar Carrito
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{marginRight:' 2em'}}
            onClick={() => buyProduct()}
          >
            Comprar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
