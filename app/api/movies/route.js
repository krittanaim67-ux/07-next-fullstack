// app/api/movies/route.js
import { NextResponse } from "next/server";
import { pool } from "@/utils/db";

export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT id, title, description, image_url, year FROM movies ORDER BY id ASC"
    );

    return NextResponse.json(rows);
  } catch (err) {
    console.error("DB error at /api/movies", err);
    return NextResponse.json(
      {
        message: "DB error at /api/movies",
        error: String(err?.message ?? err),
      },
      { status: 500 }
    );
  }
}
