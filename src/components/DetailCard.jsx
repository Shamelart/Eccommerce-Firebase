import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import CountCard from "./cart/CountCart";
import useDocument from "../hooks/useDocument";
import { CartContex } from "../contex/CartContex";
import { useContext } from "react";
import { toast } from "sonner";
import ClockLoader from "react-spinners/ClockLoader";
//

export default function DetailCard() {
  const { document, loading } = useDocument();
 // const updateStock = useUpdateDocument();
  const { addProductCart } = useContext(CartContex);

  // Aca se procesa la funcion onAdd cuando la ejecuta el CountCart
  const onAdd = async (cantidad) => {
    addProductCart({
      ...document,
      cantidad: cantidad,
    });

    toast("Producto agregado a carrito");
  };

  

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Container
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card style={{ width: "27em" }}>
          <CardMedia
            component="img"
            height="240"
            image={document.imagen}
            alt="img"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              fontSize="1.4em"
              component="div"
            >
              {document.producto}
            </Typography>
            <Typography variant="body2" color="text.secundary" fontSize="1.1em">
              {document.descripcion}
            </Typography>
            <Typography variant="h6" color="text.secundary">
              ${document.precioVenta}
            </Typography>
          </CardContent>
          <CardActionArea>
            <CardActions>
              <CountCard onAdd={onAdd} />
            </CardActions>
          </CardActionArea>
        </Card>
      </Container>
      <ClockLoader
        loading={loading}
        size={80}
        color="white"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
