'use client'

import { useEffect } from "react"

// Homepage
export default function Home() {
    // When component is mounted
    useEffect(() => {
        window.localStorage.clear()
    })

    // Return homepage
    return (
        <div></div>
    )
}
