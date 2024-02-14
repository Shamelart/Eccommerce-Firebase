//import { useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
////import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { CartContex } from "../../contex/CartContex";
import { Button } from "@mui/material";
//import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
//import PlayArrowIcon from '@mui/icons-material/PlayArrow';
//import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function CartDetail({
  nombre,
  img,
  descripcion,
  precio,
  cantidad,
  id,
}) {
  const { deleteProduct } = useContext(CartContex);

  return (
    <Card sx={{ display: "flex", minWidth: "60em" }}>
      <Box
        sx={{ display: "flex", borderBottom: "1px solid grey", margin: "3px" }}
      >
        <CardMedia
          component="img"
          height="150"
          image={img}
          style={{maxWidth:"200px", width:"200px"}}
          alt="Live from space album cover"
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", paddingTop: "0" }}
        >
          <Typography component="div" variant="h5">
            {nombre}
          </Typography>
          <Typography
            variant="h5"
            marginX={5}
            color="text.secondary"
            fontSize={"1em"}
            marginLeft="0"
            component="div"
          >
            {descripcion}
          </Typography>
          <Typography
            variant="h5"
            marginX={5}
            color="text.secondary"
            fontSize={"1em"}
            marginLeft="0"
            component="div"
          >
            {precio}
          </Typography>
          <Typography
            variant="h5"
            marginX={5}
            color="text.secondary"
            fontSize={"1em"}
            marginLeft="0"
            component="div"
          >
            X {cantidad}
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ width: "6.5em" }}
            onClick={() => deleteProduct(id)}
          >
            Eliminar
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}
