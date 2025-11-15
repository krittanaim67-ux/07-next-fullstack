// app/movies/[id]/page.js
import Link from "next/link";

export default async function MovieDetail({ params }) {
  const res = await fetch(`/api/movies/${params.id}`, { cache: "no-store" });  // ❗ ใช้ /api/... อย่างเดียว
  if (!res.ok) {
    return <div style={{ padding: 24, color: "tomato" }}>Cannot load /api/movies/{params.id}</div>;
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
            <Link href="/movies" className="btnBack">← Back to list</Link>
            <a href={movie.image_url} target="_blank" className="btnGhost" rel="noreferrer">
              Open Poster
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



