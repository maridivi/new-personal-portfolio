import "./globals.css";
import type { Metadata, Viewport } from "next";

import Stack from "@/components/ui/Stack";
import { nunito } from "@/utils/fonts";
import cn from "@/utils/cn";

export const metadata: Metadata = {
  metadataBase: new URL("https://mariannadivito.com"),
  title: "Marianna Di Vito",
  description: "Front-end web developer.",
  openGraph: {
    url: "https://mariannadivito.com",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Marianna",
      },
    ],
  },
  twitter: {
    title: "Marianna Di Vito",
    description: "I'm a front-end web developer.",
    card: "summary_large_image",
    creator: "Marianna Di Vito",
    images: [
      {
        url: "/images/og-image.png",
        alt: "About Marianna",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(nunito.className)}>
        <Stack vertical className="gap-16  h-full ">
          {/* <Navbar /> */}
          {children}
        </Stack>
      </body>
    </html>
  );
}
