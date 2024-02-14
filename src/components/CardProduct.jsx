import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function CardProduct({ img, stock, precio, nombre, id }) {
const { nameCategory } = useParams()

  return (
    <Card sx={{ maxWidth: 345, margin: 1, }}>
     
        <CardActionArea>
          <CardMedia
            component="img" 
            height="200"
            image={img}
            alt="green iguana"
          /> 
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{color: 'white', fontSize: '1.4em'}}>
              {`${nombre}`}
            </Typography>
            <Typography variant="body2" sx={{color: 'white'}}>
              Stock: {`${stock}`}
            </Typography>
            <Typography variant="body2" sx={{color: 'white'}}>
              Precio: {`$${precio}`}
            </Typography>
          </CardContent>
        </CardActionArea>
    
       <Link to={`/${nameCategory}/${id}`} style={{textDecoration: 'none'}}>
      <CardActions>
        <Button size="small" color="primary">
          Detalle
        </Button>
      </CardActions>
      </Link>
    </Card>
  );
}
