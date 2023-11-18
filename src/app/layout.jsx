import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Caption Pool',
    description: 'This website help you how to write your captions for your posts in social media application such as Facebook, Instagram, Tiktok',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}