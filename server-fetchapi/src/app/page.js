import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Fetch API in Server component</h1>
        <Link href="/productlist">View Products</Link>
      </div>
    </main>
  );
}
