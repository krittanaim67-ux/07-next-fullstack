// app/movies/page.js
import Link from "next/link";
import { headers } from "next/headers";

function getBaseUrl() {
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}

export default async function MoviesPage() {
  const baseUrl = getBaseUrl();

  const res = await fetch(`${baseUrl}/api/movies`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div style={{ padding: 24, color: "tomato" }}>
        Cannot load /api/movies (status {res.status})
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




