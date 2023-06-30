'use client'

// Imports
import { useEffect, useState } from 'react'
import NavigationButton from './navigationButton'

// Navigation component
export default function Navigation(props) {
    // States
    const [firstLoad, setFirstLoad] = useState(true)
    const [navbar, setNavbar] = useState(props.pathname == '/' ? ' opacity-0 mt-[40dvh]' : ' opacity-0 mt-4')
    const [selectedPage, setSelectedPage] = useState(props.pathname)

    // When component is mounted, and on pathname change
    useEffect(() => {
        if (firstLoad) {
            if (props.pathname == '/') {
                setTimeout(() => {
                    setNavbar(' opacity-100 mt-[36dvh]')
                }, 800)
            } else {
                setTimeout(() => {
                    setNavbar(' opacity-100 mt-0')
                }, 600)
            }
            setFirstLoad(false)
        } else {
            if (props.pathname == '/') {
                setNavbar(' opacity-100 mt-[36dvh]')
            } else {
                setNavbar(' opacity-100 mt-0')
            }
        }

        setSelectedPage(props.pathname)
    }, [props.pathname])

    // Return navigation component
    return (
        <div className={`absolute z-40 w-full flex items-center justify-center transition-all duration-700 top-2${navbar}`}>
            <div className='max-w-screen-lg w-full flex items-center justify-center'>
                <NavigationButton name="About" setNavbar={setNavbar} {...{ selectedPage, setSelectedPage }} {...props} />
                <NavigationButton name="Projects" setNavbar={setNavbar} {...{ selectedPage, setSelectedPage }}  {...props} />
                <NavigationButton name="Contact" setNavbar={setNavbar} {...{ selectedPage, setSelectedPage }}  {...props} />
            </div>
        </div>
    )
}