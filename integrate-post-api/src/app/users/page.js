import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export default async function Page() {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>User List</h1>
      {
      users.map((item) => (
        <div>
            {/* {item.name} */}
            <Link href={`users/${item.id}`}>{item.name}</Link>
        </div> 
      ))
      }
    </div>
  );
}
