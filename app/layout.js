import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import { Cormorant, Montserrat, Poppins } from 'next/font/google'
import MobileNav from '@/components/MobileNav'

export const metadata = {
  title: "Gerald Elias"
}

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['700', '500', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal','italic'],
  variable: '--font-montserrat'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins'
})

export default function RootLayout({ children }) {
  return (
    <html className={`${cormorant.variable} ${montserrat.variable} ${poppins.variable}`} lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
