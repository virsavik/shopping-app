import React, { useEffect } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList, getProductList } from "../reducers/product.reducer";
import ProductCard from "../components/ProductCard";
import { NavLink, useNavigate, useParams } from "react-router-dom";

export default function Main() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.product.loading);
  const categoryList = useSelector((state) => state.product.categoryList);
  const productList = useSelector((state) => state.product.productList);

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(getProductList(categoryId || 1));
  }, []);

  useEffect(() => {
    if (categoryId) {
      dispatch(getProductList(categoryId));
    } else {
      navigate("/category/1");
    }
  }, [categoryId]);

  return (
    <Box
      component="div"
      mt={3}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        paddingX: 5,
      }}
    >
      <Box
        width={{ xs: "100%", md: "25%" }}
        marginBottom={{ xs: 2, md: 0 }}
        marginRight={{ xs: 0, md: 2 }}
      >
        <List sx={{ backgroundColor: grey[300] }}>
          <ListItem disablePadding sx={{ backgroundColor: grey[400] }}>
            <ListItemButton>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Danh mục" />
            </ListItemButton>
          </ListItem>
          {categoryList && categoryList.length > 0 ? (
            categoryList.map((category) => (
              <ListItem key={category.id}>
                <ListItemButton
                  component={NavLink}
                  to={"/category/" + category.id}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: grey[900],
                          color: "white",
                        }
                      : {
                          color: "inherit",
                        }
                  }
                >
                  <ListItemText primary={category.name} />
                </ListItemButton>
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Không có danh mục nào" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
      <Box>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 10 }}>
          {Array.from(productList).map((product, index) => (
            <Grid item xs={4} sm={4} md={2} key={index}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
