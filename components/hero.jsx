'use client'

// Imports
import Image from "next/image"
import { useState, useEffect } from 'react'

// Hero component
export default function Hero(props) {
    // States
    const [firstLoad, setFirstLoad] = useState(true)
    const [image, setImage] = useState(' opacity-0 mt-20')

    // When component is mounted, and on pathname change
    useEffect(() => {
        if (firstLoad) {
            if (props.pathname == '/') {
                setTimeout(() => {
                    setImage(' opacity-100 mt-0')
                }, 600)
            } else {
                setImage(' opacity-0 mt-20')
            }
            setFirstLoad(false)
        } else {
            if (props.pathname == '/') {
                setImage(' opacity-100 mt-0')
            } else {
                setImage(' opacity-0 mt-20')
            }
        }
    }, [props.pathname])
    
    // Return hero
    return (
        <div className="relative z-10 max-w w-full h-[40dvh] flex justify-center items-center pointer-events-none">
            <div>
                <Image className={`mx-auto transition-all duration-700${image}`} src="/TVDB_Logo.svg" width={200} height={200} priority={true} alt='TVDB Logo'/>
            </div>
        </div>
    )
}
