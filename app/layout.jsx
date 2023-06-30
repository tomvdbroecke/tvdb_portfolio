'use client'

// Imports
import './globals.css'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Galaxy from "@/components/galaxy"
import InitialLoader from '@/components/initialLoader'
import Navigation from '@/components/navigation/navigation'
import Hero from '@/components/hero'

// Font
const inter = Inter({ subsets: ['latin'] })

// TODO: Friendlier on mobile

// Root Component
export default function Root({ children }) {
    // States
    const pathname = usePathname()

    // When component is mounted, and on path change
    useEffect(() => {
        console.log(pathname)
    }, [pathname])
    
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
                <div className='relative z-10'>{children}</div>
                <InitialLoader />
            </body>
        </html>
    )
}
