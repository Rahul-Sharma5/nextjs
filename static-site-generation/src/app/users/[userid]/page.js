//import GetUsers from "../../../../services/getUser"
import getUsers from "../../../../services/getUser"

export default async function Page(props) {
    
    const getUserList = getUsers();
    const users = await getUserList;
    const currentId = props.params.userid;
    const userData=users[currentId-1];
     //console.log(userData)

  return (
    <div>
      <h3>User Details Page</h3>
      <br/>


      <h4>User ID : {userData.id}</h4>
      <h4>User Name : {userData.name}</h4>
      <h4>Website : {userData.website}</h4>
    </div>
  );
}

export async function generateStaticParams(){
  const getUserList = getUsers();
  const users = await getUserList;
  return users.map(user=>({
userid:user.id.toString()
  }))
}