import { NextResponse } from "next/server";

export async function GET(request,content){
    
    const studentsDetails = content.params.student;
    console.log(studentsDetails);
    return(
         NextResponse.json({result:studentsDetails},{status:200})
    )
}