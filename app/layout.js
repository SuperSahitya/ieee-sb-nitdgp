import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "IEEE | NITDGP",
  description:
    "International Institute Of Electical And Electronics, Student Branch, NIT Durgapur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
