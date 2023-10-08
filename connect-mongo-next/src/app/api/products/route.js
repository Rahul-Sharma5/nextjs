import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

//! GET API From MongoDB
export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionSrt);
    data = await Product.find();
    //console.log(data)
  } catch (error) {
    data = { result: "error" };
    success = false;
  }

  return NextResponse.json({ result: data, success });
}

//! POST API
// export async function POST(req) {
//   const payload = await req.json();
//   await mongoose.connect(connectionSrt);
//   let product = new Product(payload);
//   const result = await product.save();
//   return NextResponse.json({ result, success: true });
// }
//! POST API
export async function POST(req){
  try {
    const payload = await req.json();
    if( !payload.name ||!payload.price ||!payload.company ||!payload.color ||!payload.category) 
    {
      return NextResponse.json(
        { result: "Require Field not found", success: false },
        { status: 400 }
      );
    }
    await mongoose.connect(connectionSrt)
    const product = new Product(payload);
    const result = await product.save();
    //console.log(result)
      return NextResponse.json(
        { result, success: true },
        { status: 200 }
      )
    
  } catch (error) {
    return NextResponse.json({ error: error.message, success: false }, { status: 400 });
  }
}

//! PUT Api Request (Update) code in dynamic page ([productid])