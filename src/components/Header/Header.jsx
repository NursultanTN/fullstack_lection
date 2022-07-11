import { Button, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => navigate("/login")} variant="outlined">
        login
      </Button>
      <Button onClick={() => navigate("/register")} variant="outlined">
        register
      </Button>
    </Container>
  );
};

export default Header;