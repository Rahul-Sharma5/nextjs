"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const login = () => {
  const router = useRouter();
  const navigate =(page)=>{
    router.push('/login'+page)
  }

  return (
    <div>
      <Link href="/"><h1 className="heading">Go To Home</h1></Link>
      {/* <button onClick={() => navigate("/adminlogin")}>
        Go to Admin login Page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/userlogin")}>Go to User login Page</button> */}
    </div>
  );
};

export default login;
