import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter, Arizonia } from "next/font/google";
import { Container } from "react-bootstrap";
import AnimatedPage from "@/components/AnimatedPage";

// Google fonts
const inter = Inter({ subsets: ["latin"] });
const arizona = Arizonia({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NextJs 13.4 Image Gallery",
  description: "Learning Next 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedPage>
          <Container>{children}</Container>
        </AnimatedPage>
      </body>
    </html>
  );
}
