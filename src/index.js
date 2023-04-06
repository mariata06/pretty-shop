import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context.js';
import { FilterProvider } from './context/filter_context.js'
import { CartProvider } from './context/cart_context.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider> 
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);