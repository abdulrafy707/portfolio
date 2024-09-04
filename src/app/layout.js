// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import ThreeScene from "@/components/ThreeScene"; // Import the ThreeScene component

const inter = Inter({ subsets: ["latin"] });

// Metadata for server-side
export const metadata = {
  title: "My Next.js App",
  description: "A Next.js application with 3D background",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0, height: '100%', overflowX: 'hidden' }}>
        {/* ThreeScene as the background */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <ThreeScene />
        </div>

        {/* Main content */}
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingBottom: '50px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
