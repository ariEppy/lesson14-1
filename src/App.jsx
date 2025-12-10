import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Products from "./data/Products"
import "./components/Product"
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import Cart from "./components/Cart";
import shoppingcart from './components/shoppingcart.png';


export default function App() {
  const [products, setProductArr] = useState(Products);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); 

  function addProductToCart(name,price){
    let product = {
      name,price
    }
    setCart([...cart,product]);
  }
  function addProduct(name,price){
    let product = {
      name,price
    }
    setProductArr([...products,product])
  }

  function startNew() {
    setOrders([...orders, ...cart]);
    setCart([]);
    console.log(orders);

  }
  
  return (
    <div>
      <nav>
        <Link to="/">Products</Link> | 
        <Link to="/cart"><img className="cart" src={shoppingcart} alt="cart" style={{ width: '30px', height: '30px' }}/>
</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductList
                Products={products}
                addProductToCart={addProductToCart}
              />
              <AddProduct addProduct={addProduct} />
            </>
          }
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} startNew={startNew} />}
        />
      </Routes>

    </div>
  )
}
