import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  const userData = user.filter((item) => item.id == content.params.id);

  //console.log(userData)
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

export async function PUT(request, content){
  let payload = await request.json();
  payload.id = content.params.id;
  //let userId = content.params.id;
  //console.log(payload);
  //console.log(payload);

  
  if(!payload.id || !payload.name || !payload.age || !payload.email){
    return NextResponse.json({ result: "Require Data is not vaild", success: false }, {status: 400})
  }

  return NextResponse.json({result:payload, success:true}, {status:200})
}
