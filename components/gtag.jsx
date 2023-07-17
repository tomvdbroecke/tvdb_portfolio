// Imports
import Script from "next/script"

// Gtag component
export default function Gtag() {
    // Return gtag
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NCGX0GV8GP"></Script>
            <Script id="gtag">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
    
                    gtag('config', 'G-NCGX0GV8GP');
                `}
            </Script>
        </>
    )
}