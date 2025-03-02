import { ProductProps, ProductsState } from '../../../../type';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../../../config';

//InitailState for products
const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
};

//Products fetch
export const fetchProducts = createAsyncThunk<ProductProps[]>(
  'products/fetchProducts',
  async () => {
    const endpoint = `${config?.baseUrl}/products`;
    const response = await axios.get<ProductProps[]>(endpoint);
    return response.data;
  }
);

//Product slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })

      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductProps[]>) => {
          state.status = 'succeeded';
          state.items = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export default productsSlice.reducer;
