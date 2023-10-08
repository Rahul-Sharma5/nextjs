import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ name: "Rahul", email: "abc@gmail.com"},
  {status:200});
}
