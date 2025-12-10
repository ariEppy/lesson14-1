import React from 'react'

export default function Product({name,price, addProductToCart, index}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
       <button onClick={()=> addProductToCart(name, price)}>+</button>

    </div>
  )
}
