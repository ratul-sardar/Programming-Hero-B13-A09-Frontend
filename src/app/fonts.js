import Satoshi from "next/font/local";
import { Inter } from "next/font/google";

export const satoshi = Satoshi({
  src: "../fonts/satoshi/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "300 900",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
