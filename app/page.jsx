'use client'

// Imports
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

// Homepage
export default function Home() {
    // Initialize AOS
    useEffect(() => {
        AOS.init()
    }, [])

    // Return homepage
    return (
        <div className="max-w w-full h-[60dvh] flex items-center justify-center">
            <div>
                <Image className="mx-auto" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" src="/TVDB_Logo.svg" width={200} height={200} priority={true} alt='TVDB Logo'/>
                <h1 data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000" className="font-bold text-2xl mt-6 text-center">COMING SOON</h1>
            </div>
        </div>
    )
}
