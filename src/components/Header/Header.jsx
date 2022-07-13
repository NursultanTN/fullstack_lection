import { Box, Button, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/loader";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, checkAuth, loading, handleLogout } =
    useContext(authContext);
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      {currentUser ? (
        <Box>
          <Button variant="contained" onClick={() => navigate("/products")}>
            Products
          </Button>
          <Button variant="contained" onClick={() => navigate("/add")}>
            Add
          </Button>

          <Typography variant="h6">{currentUser}</Typography>
          <Button onClick={() => handleLogout(navigate)} variant="outlined">
            Logout
          </Button>
        </Box>
      ) : (
        <Box>
          <Button onClick={() => navigate("/login")} variant="outlined">
            Login
          </Button>
          <Button onClick={() => navigate("/register")} variant="outlined">
            Register
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Header;
