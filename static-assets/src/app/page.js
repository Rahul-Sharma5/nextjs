import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Static Assets in NextJs</h1>
        <br />
        <img src="/magicui.webp" />
      </div>
    </main>
  );
}
