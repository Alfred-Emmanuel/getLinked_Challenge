import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Getlinked Registration",
  description:
    "Register for the getlinked hackathon and stand a chance to win amazing prizes",
};

export default function TestLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      <section className="mt-24">
        <main className="">{children}</main>
      </section>
    </div>
  );
}
