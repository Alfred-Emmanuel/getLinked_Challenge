import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GetLinked',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-white ${inter.className}`}>
        <Navbar />
        <div className=''>{children}</div>
      </body>
    </html>
  );
}
