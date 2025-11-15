// app/api/movies/route.js
export const dynamic = 'force-dynamic';

import { pool } from '../../../utils/db';

export async function GET() {
  try {
    const [rows] = await pool.query(
      'SELECT id, title, description, image_url, year, created_at FROM movies ORDER BY id'
    );

    // ส่งเป็น array ของ movie ทั้งหมด
    return Response.json(rows, { status: 200 });
  } catch (err) {
    console.error('GET /api/movies error:', err);
    return Response.json({ message: 'Server error' }, { status: 500 });
  }
}
