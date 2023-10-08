import Image from "next/image";
import Profile from "../../public/vercel.svg";

export default function Home() {
  return (
    <main>

      <div>
        <h1>Image Optimization</h1>
        <Image src={Profile} />       
        {/* <img src={Profile.src}/> */}
      </div>

      <div>
      <Image 
        src="https://wallpapercave.com/wp/wp9123824.jpg"
        width={400}
        height={400}
        />
      </div>
      
    </main>
  );
}
