'use client'

// Imports
import { useEffect } from "react"

// Homepage
export default function ClearLocalStorageOnLoad() {
    // When component is mounted
    useEffect(() => {
        window.localStorage.clear()
    })

    // Return clearLocalStorageOnLoad
    return (
        <div></div>
    )
}
