import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { url } = req;

  let params;

  try {
    params = new URL(url).search;
  } catch (err) {
    return NextResponse.error();
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie${params ? params : ""}`,
    {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + (process.env.TMDB_READ_TOKEN || ""),
      },
    }
  );
  const data = await res.json();

  const response = NextResponse.json({ data });

  // Set CORS headers
  response.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  response.headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS"); // Specify allowed request methods

  return response;
}
