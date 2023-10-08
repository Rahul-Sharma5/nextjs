"use client";
import Image from "next/image";
import styles from "./page.module.css";
import style from "./style.module.css";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("red");

  return (
    <main>
      <div>
        {/* <h1 className={style.red}>Conditional style and CSS IN next.js</h1> */}
        <h1 className={color == "red" ? style.red : style.green}>
          Conditional style and CSS IN next.js
        </h1>

        <h2 id={style.orange}>Id Attribute</h2>

        <h3
          style={{ backgroundColor: color == "red" ? 'red' : 'green' }}
        >
          Heading
        </h3>

        <br />
        <button onClick={() => setColor("green")}>Update Color</button>
      </div>
    </main>
  );
}
