'use client'

// Imports
import { useEffect, useState } from "react"
import PageFrame from "@/components/pageFrame"
import ContactForm from "@/components/contactForm"


// TODO: Make page

// Contact page
export default function Contact() {
    // Return contact page
    return (
        <PageFrame>
            <h1 className="text-4xl font-bold p-4">Contact</h1>
            <div className="text-lg px-4">
                <p>Get in touch for all your software development needs or if you're interested in working together!</p>
            </div>
            <div className="p-4">
                <ContactForm />
            </div>
        </PageFrame>
    )
}
