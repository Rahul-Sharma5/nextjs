"use client"

import { useRouter } from "next/navigation";

export default function DeleteProduct(props){
    const router = useRouter()
    //console.log(props.id)
    const deleteRecord = async () =>{
    let response = await fetch("http://localhost:3000/api/products/"+props.id,{
        method:"DELETE",
    })
    response = await response.json();
    if(response.success){
        alert('Deleted Successfully')
        router.push("/productlists")
    }
}
    return<button onClick={deleteRecord}>Delete</button>

}