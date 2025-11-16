// app/api/movies/route.js
import { NextResponse } from "next/server";
import { pool } from "@/utils/db";

export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT id, title, year, description, image_url FROM movies ORDER BY id"
    );
    return NextResponse.json(rows);
  } catch (err) {
    console.error("GET /api/movies error:", err);
    return NextResponse.json(
      { message: "DB error at /api/movies", error: String(err) },
      { status: 500 }
    );
  }
}
