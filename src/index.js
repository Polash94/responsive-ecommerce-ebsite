import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './Components/ProductContext';
import { SidebarProvider } from './Components/SidebarContext';
import { CartProvider } from './Components/CartContext';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <SidebarProvider>
    <CartProvider>
    <ProductProvider>

      <React.StrictMode>
        <App />
      </React.StrictMode>

    </ProductProvider>
    </CartProvider>
  </SidebarProvider>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
