import { Box, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { productsContext } from "../../contexts/productContext/productContext";
import FavoritesCard from "../FavoritesCard/FavoritesCard";

const Favorites = () => {
  const { getFavorites, favoritesPages, favorites } =
    useContext(productsContext);
  useEffect(() => {
    getFavorites();
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getFavorites();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);
  // console.log(favorites, favoritesPages);
  return (
    <Container>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"start"}>
        {favorites.map(item => (
          <FavoritesCard key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          count={favoritesPages}
          variant="outlined"
          color="secondary"
        />
      </Box>
    </Container>
  );
};

export default Favorites;
