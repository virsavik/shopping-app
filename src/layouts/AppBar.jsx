import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "inherit",
  backgroundColor: "inherit",
}));

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: blue[900],
          color: "white",
          padding: 1,
        }}
      >
        <Typography
          variant="body2"
          component="div"
          noWrap
          display={{ xs: "none", sm: "block" }}
        >
          Lorem ipsum dolor sit amet.
        </Typography>
        <Box width={{ xs: "20ch" }}></Box>
        <Box>
          <StyledButton size="small">
            <NotificationsIcon />
            <Typography variant="caption" display={{ xs: "none", md: "block" }}>
              Thông báo
            </Typography>
          </StyledButton>
          <StyledButton size="small">
            <HelpIcon />
            <Typography variant="caption" display={{ xs: "none", md: "block" }}>
              Trợ giúp
            </Typography>
          </StyledButton>
        </Box>
      </Box>
      <MuiAppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Shopping
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              aria-label="show 4 in cart"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
