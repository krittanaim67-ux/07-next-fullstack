// app/api/movies/[id]/route.js
import { NextResponse } from "next/server";
import { pool } from "@/utils/db";

export async function GET(_req, { params }) {
  try {
    const [rows] = await pool.query(
      "SELECT id, title, year, description, image_url FROM movies WHERE id = ?",
      [params.id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (err) {
    console.error("GET /api/movies/[id] error:", err);
    return NextResponse.json(
      { message: "DB error at /api/movies/[id]", error: String(err) },
      { status: 500 }
    );
  }
}
