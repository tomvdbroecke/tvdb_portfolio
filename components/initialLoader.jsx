'use client'

// Imports
import { useEffect, useState } from 'react'

// Initial Loader component
export default function InitialLoader(props) {
    // States
    const [initialLoadFinished, setInitialLoadFinished] = useState(false)

    // When component is mounted
    useEffect(() => {
        setInitialLoadFinished(true)
    })

    // Return loader component || #000308
    return (
        <div className={`max-w w-full h-[100dvh] bg-[#000712] flex items-center justify-center absolute pointer-events-none top-0 z-50 duration-1000 ${initialLoadFinished ? ' opacity-0 transition-all' : ' opacity-100 transition-none'}`}>
            <div className={`loader transition-all duration-300${initialLoadFinished ? ' opacity-0' : ' opacity-100'}`}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}