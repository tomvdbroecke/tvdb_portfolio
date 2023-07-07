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
    const [navbarCheckbox, setNavbarCheckbox] = useState(false)

    // When component is mounted, and on pathname change
    useEffect((firstLoad) => {
        if (firstLoad) {
            if (props.pathname == '/') {
                setTimeout(() => {
                    setNavbar(' opacity-100 mt-[36dvh]')
                }, 800)
            } else {
                setTimeout(() => {
                    setNavbar(' opacity-100 mt-0')
                }, 100)
            }
            setFirstLoad(false)
        } else {
            if (props.pathname == '/') {
                setNavbar(' opacity-100 mt-[36dvh]')
            } else {
                setNavbar(' opacity-100 mt-0')
            }
        }

        setNavbarCheckbox(false)
        setSelectedPage(props.pathname)
    }, [props.pathname])

    // Return navigation component
    return (
        <div className={`absolute z-20 w-full pointer-events-none flex items-center justify-center transition-all duration-700 top-0 lg:top-2${navbar}`}>
            <div className='max-w-screen-lg w-full flex flex-wrap items-center justify-center'>
                <input id="navbarCheckbox" className="hidden" type="checkbox" checked={navbarCheckbox} onChange={() => setNavbarCheckbox(!navbarCheckbox)} />
                <label className='navbarToggle pointer-events-auto sm:hidden mt-1 mb-1.5' htmlFor="navbarCheckbox">
                    <span className='bar top'></span>
                    <span className='bar middle'></span>
                    <span className='bar bottom'></span>
                </label>
                <div className='navbar pointer-events-auto transition-all duration-300 max-w-screen-lg w-full backdrop-blur sm:backdrop-blur-none !sm:opacity-100 flex flex-wrap items-center'>
                    <NavigationButton name="About" setNavbar={setNavbar} {...{ selectedPage, setSelectedPage }} {...props} />
                    <NavigationButton name="Projects" setNavbar={setNavbar} {...{ selectedPage, setSelectedPage }}  {...props} />
                    <NavigationButton name="Contact" setNavbar={setNavbar} {...{ selectedPage, setSelectedPage }}  {...props} />
                </div>
            </div>
        </div>
    )
}