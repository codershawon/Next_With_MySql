import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
      const connection = await createConnection();
      const [rows] = await connection.execute('SELECT * FROM posts');
  
      // Return the posts as JSON response
      return NextResponse.json(rows);
    } catch (error) {
        console.error(error);
      return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
  };