// app/page.js

export default function HomePage() {
  return (
    <main className="wrap">
      <h1 className="title">Welcome</h1>
      <p style={{ marginTop: "12px" }}>
        This is the home page. Click the link below to open the movie gallery.
      </p>

      <a
        href="/movies"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 18px",
          borderRadius: "999px",
          background: "linear-gradient(120deg, #6366f1, #ec4899)",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        🎬 Go to Movie Gallery
      </a>
    </main>
  );
}



