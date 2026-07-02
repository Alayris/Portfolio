import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Amaris Menou — Motion Designer · DA · Illustratrice",
  description:
    "Portfolio d'Amaris Menou — Motion Designer, Designer Graphique, Directrice Artistique et Illustratrice.",
  openGraph: {
    title: "Amaris Menou",
    description: "Motion Design · Graphisme · Illustration",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <SmoothScrollProvider>
          <CustomCursor />
          <Navigation />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
