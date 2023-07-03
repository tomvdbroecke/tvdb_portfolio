'use client'

// Imports
import Image from "next/image"

// Image tag component
export default function ImageTag(props) {
    // Return image tag
    return (
        <a className="max-w-fit mt-2 mr-2 flex bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 p-2 rounded-lg" href={props.link} target="_blank">
            <Image src={props.image} width={30} height={30} alt={`${props.name} icon`}/>
            <div className="mx-2 flex justify-center items-center">
                {props.name}
            </div>
        </a>
    )
}