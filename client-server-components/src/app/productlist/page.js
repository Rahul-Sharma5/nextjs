import Product from "./products";

async function productList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
  }
  
  export default async function product() {
    let products = await productList();
    console.log(products);
    return (
      <div>
        <h1>Product List</h1>
        {products.map((item) => (
          <div>
            <h4>
              Name : {item.title}
            </h4>
            <Product price={item.price}/>
          </div>
        ))}
      </div>
    );
  }