import type { Metadata } from "next";
import "../styles/globals.scss";
import StoreProvider from "@/StoreProvider";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Wristcheck Assessment - Jason Concepcion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
}
