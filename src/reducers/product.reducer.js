import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
} from "@reduxjs/toolkit";
import { mockApi } from "../functions/mockApi";

const initialState = {
  productList: [],
  categoryList: [],
  loading: false,
};

export const getCategoryList = createAsyncThunk(
  "product/fetch_category_list",
  async () => {
    const res = await mockApi.getCategoryList();
    return res.data;
  }
);

export const getProductList = createAsyncThunk(
  "product/fetch_product_list",
  async () => {
    const res = await mockApi.getProductList();
    return res.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(isFulfilled(getCategoryList), (state, action) => {
        state.loading = false;
        state.categoryList = action.payload;
      })
      .addMatcher(isFulfilled(getProductList), (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addMatcher(isPending(getCategoryList, getProductList), (state) => {
        state.loading = true;
      });
  },
});

export default productSlice.reducer;
