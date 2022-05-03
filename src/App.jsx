import React from "react";
import { Box } from "@mui/material";
import AppBar from "./layouts/AppBar";
import Main from "./layouts/Main";

export const App = () => {
  return (
    <Box component="div">
      <AppBar />
      <Main />
    </Box>
  );
};

export default App;
