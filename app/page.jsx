// Imports
import ClearLocalStorageOnLoad from "@/components/clearLocalStorageOnLoad"

// Set meta description for page
export const metadata = {
    description: "I'm Tom van den Broecke, a software developer based in the Netherlands. My expertise lies in full stack web development, where I thrive in creating seamless user experiences and robust server infrastructures.",
}

// Homepage
export default function Home() {
    // Return homepage
    return (
        <ClearLocalStorageOnLoad/>
    )
}
