// "use client"
import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/registerNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Getlinked Registration",
  description:
    "Register for the getlinked hackathon and stand a chance to win amazing prizes",
};

export default function RegisterLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      <section className="lg:mt-24 mt-0">
        <main className="">{children}</main>
      </section>
    </div>
  );
}
