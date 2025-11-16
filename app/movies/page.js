// app/movies/page.js

import Link from "next/link";

// ข้อมูลหนัง mock (แทนการดึงจาก DB/API)
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

export default function MoviesPage() {
  const movies = MOVIES; // ไม่ต้อง fetch แล้ว ใช้ array ตรง ๆ

  return (
    <div className="wrap">
      <header className="topbar">
        <span className="logo">🎬</span>
        <h1 className="title">Movie Gallery</h1>
      </header>

      <section className="hScroller" aria-label="movie-scroller">
        {movies.map((m) => (
          <article key={m.id} className="card">
            <Link href={`/movies/${m.id}`} className="cardLink">
              <div className="poster">
                <img src={m.image_url} alt={m.title} />
                <span className="badge">{m.year}</span>
                <div className="gradient" />
                <h2 className="cardTitle">{m.title}</h2>
              </div>
              <p className="desc">{m.description}</p>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}




