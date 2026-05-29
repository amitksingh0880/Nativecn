import React from "react";
import Link from "next/link";
import { Github, Layers } from "lucide-react";
import "../styles/globals.css";
import styles from "../styles/docs.module.css";

export const metadata = {
  title: "Nativecn - Premium React Native UI Library",
  description: "A state-of-the-art shadcn/ui & Radix-inspired React Native component library designed to be more modern and fully interactive.",
  keywords: ["react native", "expo", "ui components", "shadcn", "radix", "glassmorphism", "premium", "moti"],
  openGraph: {
    title: "Nativecn - Premium React Native UI Library",
    description: "Frosted glassmorphism, biometric components, interactive SVG status rings, bento grids, and physics-based celebration animations.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Floating Glass Header */}
        <header className={styles.header}>
          <Link href="/" className={styles.logoArea}>
            <div className={styles.logoIcon}>
              <Layers size={18} />
            </div>
            <span>Nativecn</span>
          </Link>
          
          <nav className={styles.navLinks}>
            <Link href="/docs" className={styles.navLink}>
              Documentation
            </Link>
            <a 
              href="https://github.com/amitksingh0880/Nativecn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.navLink}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <Github size={18} />
              GitHub
            </a>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
