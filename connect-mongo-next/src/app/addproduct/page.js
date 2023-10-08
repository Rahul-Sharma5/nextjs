"use client";
import { useState } from "react";
import "../style.css";
import Link from "next/link";

export default function Page() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () =>{
    //console.log(name,price,company,color,category)
    let result = await fetch('http://localhost:3000/api/products',{
        method:'POST',
        body:JSON.stringify({name,price,company,color,category})
    })
    result = await result.json();
    if(result.success){
        alert("product added");
    }
    
  }

  return (
    <div>
      <h2>Add Products</h2>
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Product Name" required
      ></input>
      <input
        className="input"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Price" required
      ></input>
      <input
        className="input"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Company" required
      ></input>
      <input
        className="input"
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter Color" required
      ></input>
      <input
        className="input"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Category" required
      ></input>
      <button className="btn" onClick={addProduct}>Add Product</button>
      <button className="btn"><Link href={"/"}>Go Back</Link></button>
    </div>
  );
}
