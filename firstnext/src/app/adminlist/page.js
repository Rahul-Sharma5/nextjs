import Link from "next/link";

export default function Admin_login_list(){
    return(
        <div>
            <h1>Admin Login List</h1>
            <ul>
                <li>
                    <Link href="/adminlist/rahul" >Rahul</Link>
                </li>
                <li>
                    <Link href="/adminlist/aniket" >Aniket</Link>
                </li>
                <li>
                    <Link href="/adminlist/satyajeet" >Satyajeet</Link>
                </li>
                <li>
                    <Link href="/adminlist/gagan" >Gagan</Link>
                </li>
                <li>
                    <Link href="/adminlist/surjeet" >Surjeet</Link>
                </li>
            </ul>
        </div>
    )
}