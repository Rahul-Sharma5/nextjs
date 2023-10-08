import Image from "next/image";
import styles from "./page.module.css";
import { API_BASE_URL } from "@/config/constants";

export default function Home() {
  //console.log(process.env.NODE_ENV)
  //console.log(process.env.SERVER_PASSWORD)
  return (
    <main className={styles.main}>
      {
        process.env.NODE_ENV =='development'?
        <h1>You are on Development</h1>
        :
        <h1>You are on Production Mode</h1>
      }

        <h1>Environment Variables</h1>
      {
        API_BASE_URL
      }
    </main>
  );
}
