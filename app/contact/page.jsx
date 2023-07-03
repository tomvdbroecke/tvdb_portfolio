'use client'

// Imports
import { useEffect, useState } from "react"

// TODO: Make page

// Contact page
export default function Contact() {
    // States
    const [page, setPage] = useState(' opacity-0 mt-20')

    // When component is mounted
    useEffect(() => {
        const loaded = localStorage.getItem('loaded')
        localStorage.setItem('loaded', true)

        if (!loaded) {
            setTimeout(() => {
                setPage(' opacity-100 mt-0')
            }, 300)
        } else {
            setPage(' opacity-100 mt-0')
        }

        window.addEventListener("unload", function (e) {
            this.localStorage.clear()
        })
    })

    // Return about page
    return (
        <div className="max-w w-full h-[100dvh] flex items-center justify-center">
            <div className="max-h-[calc(100dvh-58px)] mt-[58px] overflow-y-auto z-10">
                <div className={`backdrop-blur w-full max-w-screen-lg transition-all duration-700${page}`}>
                    <div className="page-bg"><span>
                        <h1 className="text-4xl font-bold p-4">Contact</h1>
                    </span></div>
                </div>
            </div>
        </div>
    )
}
