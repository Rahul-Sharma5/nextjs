"use client";

import { useState } from "react";

export default function Page() {
  const [color, setColor] = useState({color: "yellow"})

  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>Users Page inline CSS Style</h1>
      <h3 style={color}>Change Color Using Button</h3>
      <button onClick={()=>setColor({color: "red"})}>Click to change</button>
    </div>
  );
}
