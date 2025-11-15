// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050509] text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Welcome</h1>
        <p className="text-lg">
          This is the home page. Click the link below to open the movie gallery.
        </p>

        <Link
          href="/movies"
          className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-semibold shadow-lg hover:opacity-90 transition"
        >
          <span className="mr-2 text-2xl">🎬</span>
          Go to Movie Gallery
        </Link>
      </div>
    </main>
  );
}
