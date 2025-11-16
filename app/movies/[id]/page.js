// app/movies/[id]/page.js
import Link from "next/link";

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export default async function MovieDetail({ params }) {
  const baseUrl = getBaseUrl();

  const res = await fetch(`${baseUrl}/api/movies/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div style={{ padding: 24, color: "tomato" }}>
        Cannot load <code>/api/movies/{params.id}</code> (status {res.status})
      </div>
    );
  }

  const movie = await res.json();

  return (
    <div className="detailWrap">
      <div className="detailCard">
        <div className="detailPoster">
          <img src={movie.image_url} alt={movie.title} />
        </div>

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


