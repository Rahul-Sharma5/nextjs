import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";

const getProductsList = async () => {
  let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

export default async function Page() {
  const products = await getProductsList();
  //console.log(Products)
  return (
    <div>
      <h2>Products List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Company</th>
            <th>Color</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
            {
            products.map((item)=>(
            <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.company}</td>
            <td>{item.color}</td>
            <td>{item.category}</td>
            <td><Link href={"productlists/"+item._id}>Edit</Link></td>
            <td><DeleteProduct id={item._id}></DeleteProduct></td>
            </tr>
            ))
            }
            </tbody>
  
      </table>
    </div>
  );
}
