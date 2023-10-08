'use client'
import Link from "next/link";
import styles from "./page.module.css";
import {useRouter} from 'next/navigation'

export default function Home() {
  const router = useRouter();
  // const apple=(item)=>{
  //   alert(item)
  // }

  const navigate =(name)=>{
    router.push(name)
  }

  return (
    <main className={styles.main}>
      {/* <User name="Rahul" /> */}
      <h1>Basic Routing | Home Page</h1>
      {/* <button onClick={()=>apple("Fruit")} >Click me</button> */}
      <Link href="/login">Login page </Link>
      <Link href="/signup">Signup page </Link>

      {/* <br/>
      <button onClick={()=> navigate("/login")}>Login Page</button> */}
    </main>
  )
}

// const User = (props) => {
//   return (
//     <div>
//       <h1>Hello {props.name}</h1>
//     </div>
//   );
// };
