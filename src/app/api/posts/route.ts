import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const db = await createConnection()
        const sql = "SELECT * FROM posts";
        const [posts]= await db.query(sql);
        return NextResponse.json(posts);
    }catch(error){
        console.log(error);
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }
}