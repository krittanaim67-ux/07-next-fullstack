// app/movies/[id]/page.js

import Link from "next/link";

// ข้อมูล mock ใช้เหมือนกันกับหน้า /movies
const MOVIES = [
  {
    id: 1,
    title: "Inception",
    description:
      "A dream heist movie where people enter dreams to steal secrets.",
    year: 2010,
    image_url:
      "https://images7.alphacoders.com/586/thumb-1920-586904.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    description:
      "A group of astronauts travel through a wormhole in search of a new home for humanity.",
    year: 2014,
    image_url:
      "https://images6.alphacoders.com/851/thumb-1920-851633.jpg",
  },
];

export default function MovieDetail({ params }) {
  const id = Number(params.id);
  const movie = MOVIES.find((m) => m.id === id);

  if (!movie) {
    return (
      <div style={{ padding: 24, color: "tomato" }}>
        Movie not found (id: {id})
      </div>
    );
  }

  return (
    <div className="detailWrap">
      <div className="detailCard">
        {/* โปสเตอร์ด้านซ้าย */}
        <div className="detailPoster">
          <img src={movie.image_url} alt={movie.title} />
        </div>

        {/* เนื้อหาด้านขวา */}
        <div className="detailBody">
          <div className="yearChip">{movie.year}</div>
          <h1 className="detailTitle">{movie.title}</h1>
          <p className="detailDesc">{movie.description}</p>

          <div className="detailActions">
            <Link href="/movies" className="btnBack">
              ← Back to list
            </Link>
            <a
              href={movie.image_url}
              target="_blank"
              className="btnGhost"
              rel="noreferrer"
            >
              Open Poster
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

