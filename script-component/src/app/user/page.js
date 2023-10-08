"use client";
import Script from "next/script";

export default function page() {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("File Loading please wait!");
        }}
      />
      <h1>Get User Location</h1>
    </div>
  );
}
