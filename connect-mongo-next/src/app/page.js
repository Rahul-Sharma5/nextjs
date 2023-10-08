import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h2>Connection Mongodb With NextJs</h2>
        <Link href="/addproduct">Add Products</Link><br></br>
        <Link href="/productlists">Products List</Link>
      </div>
    </main>
  );
}
