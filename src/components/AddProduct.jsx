import React, { useState } from "react";

export default function AddProduct({addProduct}) {
  const [name,setName] = useState("")
  const [price,setPrice] = useState(0)
 
  return (
    <div>
      <input type="text" placeholder="Enter Name" onChange={(element)=> setName(element.target.value)}/> <br />
      <input type="text" placeholder="Enter Price" onChange={(element)=> setPrice(element.target.value)}/> <br />
      <button onClick={()=>addProduct(name,price)}>Add</button>
    </div>
  );
}
