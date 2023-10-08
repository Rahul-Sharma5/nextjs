import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request) {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req, res) {
  let payload = await req.json();
  //console.log(payload.name)
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json({ result: "Require Field not found", success: false }, {status: 400});
  }
  return NextResponse.json({ result: "Created Sussessfully", success: true }, {status: 200});
}
