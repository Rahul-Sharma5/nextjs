import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request) {
 const data = user;
 return NextResponse.json(data, {status:200})
}
