"use client";
import { useState } from "react";
import "./../style.css";

export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    //console.log(name,age,email)
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    console.log(response)


    if (response.success) {
      alert("user added successfully");
    } else {
      alert("some error with data please check");
    }
    //console.log(response);
  };

  return (
    <div className="add-user">
      <h2>Add New User</h2>
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

      <button onClick={addUser} className="btn">
        Add User
      </button>
    </div>
  );
}
