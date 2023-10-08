import Link from "next/link";
import getUsers from "../../../services/getUser"

export default async function Page(){
    const getUserList = getUsers();
    const users = await getUserList;
    console.log(users);

    return(
        <div>
            <h1>Users List</h1>
            <br/>
            {
                users.map((user)=>(
               <h4 key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
               </h4>
                ))
            }
        </div>
    )
}