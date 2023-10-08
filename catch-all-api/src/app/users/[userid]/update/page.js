"use client";
import { useEffect, useState } from "react";
import "./../../../style.css";

export default function Page({ params }) {
  let id = params.userid;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDatils();
  }, []);

  const getUserDatils = async () => {
    let data = await fetch("http://localhost:3000/api/users/" + id);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };

  const updateUser = async () => {
    //console.log({ name, age, email });
    let result = await fetch("http://localhost:3000/api/users/" + id,{
      method:"PUT",
      body: JSON.stringify({name,age,email})
    })
    result = await result.json()
    console.log(result)

    if(result.success){
      alert("User Info Updated")
    }
    else{
      alert('Error')
    }
  };

  return (
    <div className="add-user">
      <h2>Update User Details</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <input
        className="input-field"
        type="text"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      ></input>

      <input
        className="input-field"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <button className="btn" onClick={updateUser}>
        Add User
      </button>
    </div>
  );
}
