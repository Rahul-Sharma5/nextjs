"use client"
import { useState, useEffect } from 'react'


export default function ProductList(){

    const [product, setProduct] = useState([])

    useEffect(async () => {
        let data = await fetch("https://dummyjson.com/products")
        data = await data.json()
        console.log(data);
        setProduct(data.products)
    }, [])


    return(
        <div>
                        <h1>Product List</h1>
            {
              product.map((item)=>(
                <h3>Product Name : {item.title}, Price : {item.price}</h3>
              ))
            }
        </div>
    )
}