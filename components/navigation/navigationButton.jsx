'use client'

// Imports
import Link from "next/link"

// Navigation button component
export default function NavigationButton(props) {
    // Return navigation button component
    return (
        <Link className="navButtonLink mx-auto" href={props.name.toLowerCase()} onClick={() => props.setSelectedPage('/' + props.name.toLowerCase())}>
            <button type="button" className={`navButton w-screen sm:w-52 h-14 flex items-center justify-center text-xl font-bold${props.selectedPage == '/' + props.name.toLowerCase() ? ' selected' : ''}`}><span>{props.name}</span></button>
        </Link>
    )
}