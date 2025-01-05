import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "../libs/lenis";

export const metadata: Metadata = {
  title: "EZ - Business Presentation",
  description: "Presentation Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body className={``}>{children}</body>
      </html>
    </ReactLenis>
  );
}
