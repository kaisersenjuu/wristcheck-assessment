import type { Metadata } from "next";
import "../../styles/globals.scss";

export const metadata: Metadata = {
  title: "Price Page",
  description: "Wristcheck Assessment - Jason Concepcion",
};

export default function PriceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
