// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="wrap">
      <header className="topbar">
        <span className="logo">🎬</span>
        <h1 className="title">Welcome</h1>
      </header>

      <p style={{ marginTop: 12, fontSize: 16 }}>
        This is the home page. Click the link below to open the movie gallery.
      </p>

      <div style={{ marginTop: 16 }}>
        <Link href="/movies" className="btnBack">
          Go to Movie Gallery
        </Link>
      </div>
    </main>
  );
}
