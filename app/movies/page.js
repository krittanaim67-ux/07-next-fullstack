// app/movies/page.js
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function MoviesPage() {
  const res = await fetch(`${baseUrl}/api/movies`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div style={{ padding: 20, color: "tomato" }}>
        Cannot load /api/movies
      </div>
    );
  }

  const movies = await res.json();

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






