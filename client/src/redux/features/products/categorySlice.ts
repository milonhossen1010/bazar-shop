import { CategoriesState, CategoryProps } from './../../../../type';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { config } from "../../../../config";
import axios from "axios";


//initialState for category
const initialState: CategoriesState = {
  items: [],
  status: "idle",
  error:null
}


//fetch categories
export const fetchCategories = createAsyncThunk<CategoryProps[]>(
  "categories/fetchCategories",
  async () => {
    const endpoint = config?.baseUrl + '/categories';
    const response = await axios.get<CategoryProps[]>(endpoint);
    return response.data;
  }
)


//Category slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<CategoryProps[]>) => {
          state.status = 'succeeded';
          state.items = action.payload;
        }
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch categories';
      });
  }
})


export default categoriesSlice.reducer;