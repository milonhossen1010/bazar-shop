import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface CartItem {
  id: number;
  productId: number;
  quantity: number;
  [key: string]: any;
}

// initialSte 
export type CartState = CartItem[];
const initialState: CartState = [];

 
const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingProduct = state.find(
        product => product.productId === action.payload.productId
      );

      if (existingProduct) {
        toast.error('The product already exists in the cart.');
      } else {
        state.push({
          ...action.payload,
          id: Date.now(),
          quantity: 1,
        });
        toast.success('Product Added Successfully!');
      }
    },
    //increasement quantity
    increaseQuantity: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      product && product.quantity++;
    },

    // decrement quantity
    decreaseQuantity: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      product && product.quantity > 1 && product.quantity--;
    },

    //remove from cart
    removeFromCart: (state, action) => {
      toast.success('Remove success!');
      return state.filter(product => product.id !== action.payload);
    },
  },
});


export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;