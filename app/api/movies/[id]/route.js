// app/api/movies/[id]/route.js
import { NextResponse } from "next/server";
import { pool } from "@/utils/db";

export async function GET(_req, { params }) {
  try {
    const movieId = Number(params.id);
    if (!Number.isInteger(movieId)) {
      return NextResponse.json(
        { message: "Invalid movie id" },
        { status: 400 }
      );
    }

    const [rows] = await pool.query(
      "SELECT id, title, description, image_url, year FROM movies WHERE id = ? LIMIT 1",
      [movieId]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Movie not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(rows[0]);
  } catch (err) {
    console.error(`DB error at /api/movies/${params.id}`, err);
    return NextResponse.json(
      {
        message: `DB error at /api/movies/${params.id}`,
        error: String(err?.message ?? err),
      },
      { status: 500 }
    );
  }
}
