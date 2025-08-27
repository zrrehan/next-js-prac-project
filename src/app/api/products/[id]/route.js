import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const parameters = await params;
    const singleID = parameters.id;
    const query = { _id: new ObjectId(singleID) }
    console.log(query)
    const result = await dbConnect("products").findOne(query);
    return Response.json(result);
}