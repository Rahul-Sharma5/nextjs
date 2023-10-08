import Image from "next/image";
import styles from "./page.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: '500',
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <div>
        <h1 style={{color:'blue'}}>Font Optimization in NextJs</h1>
      </div>

      <div>
        <h2 style={{ fontFamily: "Roboto", fontWeight: "100" , color:'orangered'}}>
          Fonts With Link Tag
        </h2>
      </div>

      <div>
        <h3 className={roboto.className} style={{color:'green'}}>Fonts with Next Js Font Features</h3>
      </div>
    </main>
  );
}
