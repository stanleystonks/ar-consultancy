import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Marvin Kuijs A&R Consultancy: Elevate Your Music Career",
  description:
    "Unlock the potential of your music career with A&R specialist Marvin Kuijs. Consultations, analysis, branding, and insights to take your music to major labels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
