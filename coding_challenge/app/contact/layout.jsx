import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/registerNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with us at getlinked",
};

export default function ContactLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      <section className="lg:mt-24">
        <main className="">
          {children}</main>
      </section>
    </div>
  );
}
