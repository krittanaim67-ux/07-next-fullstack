// app/api/movies/[id]/route.js
import { NextResponse } from "next/server";

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

export async function GET(_req, { params }) {
  const id = Number(params.id);
  const movie = MOVIES.find((m) => m.id === id);

  if (!movie) {
    return NextResponse.json({ message: "Movie not found" }, { status: 404 });
  }

  return NextResponse.json(movie);
}
