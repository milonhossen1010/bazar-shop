import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductProps } from '../../../../type';
import toast from 'react-hot-toast';
 

interface CartItem extends ProductProps {
  quantity: number;
  selectedColor: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(i => i._id === action.payload._id);
      if (item) {
        // item.quantity += 1;
        toast.error('Already added in the cart.');
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
         toast.success(action.payload.overView + ' Added Successful');
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i._id === action.payload);
      toast.error(item?.overView + '  Removed From Cart.');
      state.items = state.items.filter(item => item._id !== action.payload);
      
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i._id === action.payload);
      if (item) {
        item.quantity += 1;
        toast.success(item.overView + ' Increase Successful');
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i._id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          toast.success(item.overView + ' Decrease Successful');
        } else {
          state.items = state.items.filter(i => i._id !== action.payload);
          toast.error(item.overView +  '  Removed From Cart.');
        }
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
