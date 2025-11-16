// app/api/movies/route.js
import { NextResponse } from "next/server";

// mock data แทนการดึงจาก DB ชั่วคราว
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

export async function GET() {
  // ไม่เรียก DB เลย ส่ง mock data กลับไปตรง ๆ
  return NextResponse.json(MOVIES);
}
