export const metadata = {
  title: "Social Media Downloader",
  description: "Download videos from YouTube, Instagram, TikTok",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
