import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productContext/productContext";

const Reviews = ({ reviews }) => {
  const { id } = useParams();
  const { createReview, deleteReview } = useContext(productsContext);
  const [newReview, setNewReview] = useState("");
  function handleSave() {
    const review = {
      text: newReview,
      product: id,
    };
    createReview(review, id);
    setNewReview("");
  }
  return (
    <Box>
      <Box>
        <TextField
          label="New review"
          value={newReview}
          onChange={e => setNewReview(e.target.value)}
        />
        <Button variant="outlined" onClick={handleSave}>
          Post
        </Button>
      </Box>
      <Typography variant="h5">Reviews {reviews.length} </Typography>
      <Box>
        {reviews.map(item => (
          <Box marginBottom={"20px"}>
            <Typography variant="p">Author: {item.author}</Typography>
            <Typography variant="p">{item.text}</Typography>
            <Typography variant="p">{item.created_at}</Typography>
            <br />
            {item.is_author ? (
              <Button
                onClick={() => deleteReview(item.id, id)}
                color="error"
                variant="contained">
                Delete
              </Button>
            ) : null}
            <Divider variant="inset" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Reviews;
