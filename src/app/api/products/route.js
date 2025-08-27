import { NextResponse } from "next/server";

const { dbConnect } = require("@/lib/dbConnect");

export async function GET() {
    const data = await dbConnect("products").find().toArray();
    return NextResponse.json(data);
}

export async function POST(req) {
    const postedData = await req.json();
    const result = await dbConnect("products").insertOne(postedData);
    return Response.json(result)
}

