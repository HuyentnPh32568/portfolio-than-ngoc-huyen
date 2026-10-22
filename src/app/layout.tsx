import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thân Ngọc Huyên — Graphic Designer & Video Editor",
  description: "Creative portfolio — graphic design, brand identity and video editing.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}
