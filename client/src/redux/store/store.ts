// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import productsReducer from '../features/products/productSlice';
import categoriesReducer from '../features/products/categorySlice';
// import cartReducer, { CartState } from '../features/cartSlice';
// import { ProductsState, CategoriesState } from './../../../type';

// Define the root state type
// export interface RootState {
//   products: ProductsState;
//   categories: CategoriesState;
//   // cart: CartState;
// }

// Persist configuration
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart'],
// };

// const persistedCartReducer = persistReducer<CartState>(
//   persistConfig,
//   cartReducer
// );

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categoris: categoriesReducer,
    // cart: persistedCartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // Ignore these paths in the state
        ignoredPaths: ['register', 'rehydrate'],
      },
    }),
});

export const persistor = persistStore(store);
// Export the AppDispatch type
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
