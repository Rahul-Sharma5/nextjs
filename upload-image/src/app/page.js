"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(file)
    const data = new FormData()
    data.set('file',file)
    let result = await fetch('api/upload',{
    method: "POST",
    body:data
    })
    result = await result.json()
    console.log(result)
    if(result.success){
      alert("Image Uploaded Successfully")
    }
  };
  return (
    <main className={styles.main}>
      <div>
        <h2>Upload Image in NextJs 13.4</h2>
        <form onSubmit={onSubmit}>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files?.[0])}
          ></input>
          <button type="submit">Upload Image</button>
        </form>
      </div>
    </main>
  );
}
