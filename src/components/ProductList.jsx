import React from 'react'
import Product from './Product'

export default function ProductList({Products, addProductToCart}) {
  return (
    <div>
      {Products.map((value,index)=>(
        <Product
        key={index}
        index={index}
        name={value.name}
        price={value.price}
        addProductToCart={addProductToCart}
/>
      ))}
    </div>
  )
}
