import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

//! PUT API Request
export async function PUT(request, content){
    //console.log(content);
    const productId=content.params.productid;
    const filter={_id:productId}
    const payload = await request.json();
    //console.log(payload)
    await mongoose.connect(connectionSrt)
    const result = await Product.findOneAndUpdate(filter,payload)    
    return NextResponse.json({result,success:true})
}

//! GET API Request
export async function GET(request, content){
    const productId=content.params.productid;
    const filter={_id:productId}
    await mongoose.connect(connectionSrt)
    const result = await Product.findById(filter)    
    return NextResponse.json({result,success:true})
}

//! DELETE API Request
export async function DELETE(request, content){
    const productId=content.params.productid;
    const filter={_id:productId}
    await mongoose.connect(connectionSrt)
    const result = await Product.deleteOne(filter)    
    return NextResponse.json({result,success:true})
}