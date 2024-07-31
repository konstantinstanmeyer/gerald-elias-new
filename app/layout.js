import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import { Outfit, Playfair_Display, Cormorant, Overpass, Red_Hat_Mono, Montserrat, Poppins, Courier_Prime } from 'next/font/google'
import MobileNav from '@/components/MobileNav'

export const metadata = {
  title: "Gerald Elias"
}

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
})

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playfair-display',
  styles: ['normal', 'italic']
})

const courier_prime = Courier_Prime({
  subsets: ['latin'],
  weight: ['700','400'],
  style: ['normal', 'italic'],
  variable: '--font-courier-prime'
})

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['700', '500', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant'
});

const overpass = Overpass({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-overpass'
});

const red_hat_mono = Red_Hat_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-red-hat-mono',
  style: ['normal', 'italic'],
})

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
    <html className={`${outfit.variable} ${playfair_display.variable} ${cormorant.variable} ${overpass.variable} ${courier_prime.variable} ${red_hat_mono.variable} ${montserrat.variable} ${poppins.variable}`} lang="en">
      <body className="">
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
