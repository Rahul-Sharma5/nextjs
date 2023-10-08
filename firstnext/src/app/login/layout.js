"use client"
import Link from "next/link"
import './login.css'
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname();
    //console.log(pathName);

    return (
        <div >
            {
                pathName !== "/login/userlogin" ?
                    <ul className="login-manu">
                        <li>
                            <h4>Login Page</h4>
                        </li>
                        <li>
                            <Link href="/login">Login Main
                            </Link>
                        </li>
                        <li>
                            <Link href="/login/adminlogin">Admin Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/login/userlogin">User Login
                            </Link>
                        </li>
                    </ul>
                    : null
            }
            {children}
        </div>
    )
}
