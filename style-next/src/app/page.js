import Image from "next/image";
import styles from "./page.module.css";

import custom from "./custom.module.css"
import customtwo from "./customtwo.module.css"
import outside from "@/style/outside.module.css"

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="main">Style & CSS With NextJs</h1>
        <h2 className={custom.main}>Custom Modules Css</h2>
        <h2 className={customtwo.main}>Custom Two Modules Css</h2>
        <h2 className={outside.main}>OutSide Modules Css</h2>
      </div>
    </main>
  );
}
