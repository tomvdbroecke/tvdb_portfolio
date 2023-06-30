'use client'

// Imports
import Link from "next/link"

// Navigation button component
export default function NavigationButton(props) {
    // Return navigation button component
    return (
        <Link className="mx-auto" href={props.name.toLowerCase()}>
            <button type="button" className='mx-auto w-52 h-14 flex items-center justify-center text-xl font-bold'><span>{props.name}</span></button>
        </Link>
    )
}