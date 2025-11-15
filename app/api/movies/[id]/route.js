// app/api/movies/[id]/route.js
export const dynamic = 'force-dynamic';

import { pool } from '../../../../utils/db';

export async function GET(request, { params }) {
  const { id } = params; // /api/movies/1 → id = '1'

  try {
    const [rows] = await pool.query(
      'SELECT id, title, description, image_url, year, created_at FROM movies WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return Response.json({ message: 'Movie not found' }, { status: 404 });
    }

    // ส่งแค่ object เดียว
    return Response.json(rows[0], { status: 200 });
  } catch (err) {
    console.error(`GET /api/movies/${id} error:`, err);
    return Response.json({ message: 'Server error' }, { status: 500 });
  }
}
