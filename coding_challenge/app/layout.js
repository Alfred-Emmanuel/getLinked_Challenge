import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GetLinked",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-white bg-dark-mode-background-color`}>
        <div className="">
          <Toaster position="top-right" />

          {children}
        </div>
      </body>
    </html>
  );
}
