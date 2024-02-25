import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { url } = req;

  let params;

  try {
    params = new URL(url).search;
  } catch (err) {
    return Response.error();
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

  return Response.json({ data });
}
