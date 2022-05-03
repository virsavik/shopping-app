import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import { orange } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  fontSize: "0.8rem",
  height: "1rem",
}));

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: orange[900],
          color: "white",
          padding: 1,
        }}
      >
        <Typography
          variant="body2"
          component="div"
          noWrap
          display={{ xs: "none", sm: "block" }}
          sx={{ fontSize: "0.8rem" }}
        >
          Vào cửa hàng trên ứng dụng F8
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "white",
            marginLeft: 1,
            marginRight: 1,
          }}
        />
        <Typography
          variant="body2"
          component="div"
          noWrap
          display={{ xs: "none", sm: "block" }}
          sx={{ fontSize: "0.8rem" }}
        >
          Kết nối
        </Typography>
        &nbsp;
        <FontAwesomeIcon icon={["fab", "facebook"]} size="sm" />
        &nbsp;
        <FontAwesomeIcon icon={["fab", "instagram"]} size="sm" />
        <Box width={{ xs: "none", md: "10ch" }}></Box>
        <Box>
          <StyledButton>
            <NotificationsIcon />
            <Typography variant="caption">Thông báo</Typography>
          </StyledButton>
          <StyledButton>
            <HelpIcon />
            <Typography variant="caption">Trợ giúp</Typography>
          </StyledButton>
        </Box>
      </Box>
      <MuiAppBar
        position="static"
        sx={{
          backgroundColor: orange[800],
        }}
      >
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
