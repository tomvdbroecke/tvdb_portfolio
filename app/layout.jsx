'use client'

// Imports
import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Galaxy from "@/components/galaxy"
import InitialLoader from '@/components/initialLoader'
import Navigation from '@/components/navigation/navigation'
import Hero from '@/components/hero'
import Gtag from '@/components/gtag'

// Font
const inter = Inter({ subsets: ['latin'] })

// Root Component
export default function Root({ children }) {
    // States
    const pathname = usePathname()

    // Return root layout
    return (
        <html lang="en">
            <head>
                <title>Tom van den Broecke</title>
                <meta name="description" content="A portfolio website for Tom van den Broecke."/>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            </head>
            <body className={`overflow-hidden ${inter.className}`}>
                <Galaxy {...{ pathname }} />
                <Hero {...{ pathname }} />
                <Navigation {...{ pathname }} />
                {children}
                <InitialLoader />
                <Gtag />                
            </body>
        </html>
    )
}
