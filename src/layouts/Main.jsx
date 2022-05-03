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

export default function Main() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.product.loading);
  const categoryList = useSelector((state) => state.product.categoryList);
  const productList = useSelector((state) => state.product.productList);

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(getProductList());
  }, []);

  return (
    <Box component="div" mt={3}>
      <Grid
        container
        spacing={2}
        sx={{
          paddingX: 2,
        }}
      >
        <Grid item xs={12} md={3}>
          <List sx={{ margin: 1, backgroundColor: grey[300] }}>
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
                  <ListItemButton>
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
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid
            container
            spacing={{ xs: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              margin: 1,
            }}
          >
            {Array.from(productList).map((product, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <ProductCard {...product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
