'use client'

// Imports
import './globals.css'
import { Inter } from 'next/font/google'
import Galaxy from "@/components/galaxy"
import InitialLoader from '@/components/initialLoader'

// Font
const inter = Inter({ subsets: ['latin'] })

// Root Component
export default function Root({ children }) {
    // Return root layout
    return (
        <html lang="en">
            <head>
                <title>Tom van den Broecke</title>
                <meta name="description" content="A portfolio website for Tom van den Broecke."/>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            </head>
            <body className={inter.className}>
                <div className="overflow-hidden">
                    <InitialLoader />
                    <div className='absolute z-40 max-w w-full h-[100dvh] antialiased'>{children}</div>
                    <Galaxy />
                </div>
            </body>
        </html>
    )
}
