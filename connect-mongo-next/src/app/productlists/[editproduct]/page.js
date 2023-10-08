"use client";
import { useEffect, useState } from "react";
import "../../style.css";
import Link from "next/link";

export default function Page(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    //console.log(props.params.editproduct);
    getProductDetail();
  }, []);

  //! Get Data By ID and Auto Fill Data
  const getProductDetail = async () => {
    let productId = props.params.editproduct;
    let productData = await fetch(
      "http://localhost:3000/api/products/" + productId
    );
    productData = await productData.json();
    if (productData.success) {
      let result = productData.result;
      setName(result.name);
      setPrice(result.price);
      setCompany(result.company);
      setColor(result.color);
      setCategory(result.category);
    }
    //console.log(productData);
  };


  //! OnClick Btn Event Here
  const updateProduct = async () =>{
    let productId = props.params.editproduct;
    let productData = await fetch(
      "http://localhost:3000/api/products/" + productId,{
        method: "PUT",
        body:JSON.stringify({name,price,company,color,category})
      });
      productData= await productData.json();
      if(productData.result){
        alert("Update Successful")
        //redirect('/productlists')
       window.location.href='/productlists'
      }
  }

  return (
    <div>
      <h2>Update Products</h2>
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Product Name"
        required
      ></input>
      <input
        className="input"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Price"
        required
      ></input>
      <input
        className="input"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Company"
        required
      ></input>
      <input
        className="input"
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter Color"
        required
      ></input>
      <input
        className="input"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Category"
        required
      ></input>
      <button className="btn" onClick={updateProduct}>Update Product</button>
      <button className="btn"><Link href={"/productlists"}>Go Back</Link></button>
    </div>
  );
}
