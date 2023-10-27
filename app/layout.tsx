import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanban board",
  description: "Manage task with a kanban board",
};

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
