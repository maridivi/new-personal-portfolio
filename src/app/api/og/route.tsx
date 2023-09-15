// App router includes @vercel/og.
// No need to install it.

import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

const ogImageContent = (
  <div
    style={{
      display: "flex",
      background: "#f6f6f6",
      width: "100%",
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img width="256" height="256" />
  </div>
);

const ogImageResponse = new ImageResponse(
  ogImageContent,

  {
    width: 1200,
    height: 630,
  }
);

export async function handler(req, res) {
  res.setHeader("Content-Type", "/images/avatar.jpeg");
  res.send(await ogImageResponse);
}
