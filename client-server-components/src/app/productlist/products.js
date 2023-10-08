"use client";

export default function Products({ price }) {
  console.log(price);
  return (
    <div>
      <button onClick={() => alert(price)}>Check Price</button>
    </div>
  );
}
