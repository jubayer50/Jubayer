import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Jubayer",
  description: "Frontend web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="bg-[#021525] min-h-screen text-white">
        <Navbar></Navbar>

        <main>{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}
