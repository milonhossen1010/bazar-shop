import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import cartReducer from './../features/products/CartSlice';
import productsReducer from './../features/products/productSlice';
import categoriesReducer from './../features/products/categorySlice';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const productsPersistConfig = {
  key: 'products',
  storage,
};

const categoriesPersistConfig = {
  key: 'categories',
  storage,
};

const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  products: persistReducer(productsPersistConfig, productsReducer),
  categories: persistReducer(categoriesPersistConfig, categoriesReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
