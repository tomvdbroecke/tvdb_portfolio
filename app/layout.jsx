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
                <meta name="author" content="Tom van den Broecke"/>
                <meta name="description" content="I'm Tom van den Broecke, a software developer based in the Netherlands. My expertise lies in full stack web development, where I thrive in creating seamless user experiences and robust server infrastructures."/>
                <meta name="keywords" content="Software Engineer, Sofware Developer, Full Stack, NextJs, React, Express, Programming"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000613"/>
                <meta name="msapplication-TileColor" content="#000613"/>
                <meta name="theme-color" content="#000613"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
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
