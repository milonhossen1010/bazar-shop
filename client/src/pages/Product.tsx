"use client"
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/features/products/productSlice';
import { RootState, AppDispatch } from '../redux/store/store';

export default function Product() {
  const dispatch: AppDispatch = useDispatch(); 
  const products = useSelector((state: RootState) => state.products.items);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts()); 
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className='min-h-screen flex items-center justify-center '>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product?.images.map(img => (
              <img src={img} alt={product.name} />
            ))}{' '}
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}