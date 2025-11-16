// app/movies/[id]/page.js
import Link from "next/link";
import { headers } from "next/headers";

function getBaseUrl() {
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}

export default async function MovieDetail({ params }) {
  const baseUrl = getBaseUrl();

  const res = await fetch(`${baseUrl}/api/movies/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div style={{ padding: 24, color: "tomato" }}>
        Cannot load /api/movies/{params.id} (status {res.status})
      </div>
    );
  }

  const movie = await res.json();

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
              rel="noreferrer"
              className="btnGhost"
            >
              Open Poster
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

