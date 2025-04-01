import { NextResponse } from "next/server";

export const POST = async (request: NextResponse) => {
  const data = await request.json();
  console.log("data", data);
  
};
