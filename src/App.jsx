import React from "react";
import { Box } from "@mui/material";
import AppBar from "./layouts/AppBar";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

export const App = () => {
  return (
    <Box component="div">
      <AppBar />
      <Main />
      <Footer />
    </Box>
  );
};

export default App;
