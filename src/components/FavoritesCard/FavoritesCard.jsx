import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { productsContext } from "../../contexts/productContext/productContext";

export default function FavoritesCard({ item }) {
  const { toggleFavorites } = React.useContext(productsContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price {item.price} <br />
          Author {item.author} <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => toggleFavorites(item.id)}>
          Delete
        </Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}
