import { ImageResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export async function GET(request) {
  const image = await fetch(
    new URL("/images/avatar.jpeg", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img width="256" height="256" src={image} />
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
  // return new Response(imageG);
}
