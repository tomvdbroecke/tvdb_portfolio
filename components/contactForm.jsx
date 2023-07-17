'use client'

// Imports
import React, { useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import emailjs from '@emailjs/browser'
import * as Yup from "yup"
import LoadingIcons from "react-loading-icons"

// Initial values for contact form
const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

// Yup validation schema
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required")
})

// Contact Form component
export default function ContactForm() {
    // States
    const [sentNotification, setSentNotification] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    // Contact form submit function
    const onSubmit = async (values) => {
        setSubmitting(true)
        try {
            const templateObject = {
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message
            }
            await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 'template_xj8jgkf', templateObject, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
            setSentNotification("Your message was sent successfully!")
        } catch (error) {
            console.log(error)
            setSentNotification("Message could not be sent, please try again later.")
        }
        setSubmitting(false)
    }

    // Return contact form
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="relative">
                    <Field className="bg-white/5 p-2 rounded-lg w-full transition-all duration-200 outline-0 focus:bg-white/10 disabled:cursor-not-allowed" disabled={sentNotification} placeholder="Name" type="text" id="name" name="name" />
                    <ErrorMessage className="absolute top-0 right-0 p-2 text-rose-400 pointer-events-none" name="name" component="div" />
                </div>

                <div className="relative mt-2">
                    <Field className="bg-white/5 p-2 rounded-lg w-full transition-all duration-200 outline-0 focus:bg-white/10 disabled:cursor-not-allowed" disabled={sentNotification} placeholder="Email" type="email" id="email" name="email" />
                    <ErrorMessage className="absolute top-0 right-0 p-2 text-rose-400 pointer-events-none" name="email" component="div" />
                </div>

                <div className="relative mt-2">
                    <Field className="bg-white/5 p-2 rounded-lg w-full transition-all duration-200 outline-0 focus:bg-white/10 disabled:cursor-not-allowed" disabled={sentNotification} placeholder="Subject" type="text" id="subject" name="subject" />
                    <ErrorMessage className="absolute top-0 right-0 p-2 text-rose-400 pointer-events-none" name="subject" component="div" />
                </div>

                <div className="relative mt-2">
                    <Field className="bg-white/5 p-2 rounded-lg w-full transition-all duration-200 outline-0 focus:bg-white/10 disabled:cursor-not-allowed" disabled={sentNotification} placeholder="Message" as="textarea" id="message" name="message" />
                    <ErrorMessage className="absolute top-0 right-0 p-2 text-rose-400 pointer-events-none" name="message" component="div" />
                </div>

                <div className="overflow-hidden flex">
                    <button disabled={sentNotification} className="px-4 mt-2 mr-2 bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 p-2 rounded-lg disabled:cursor-not-allowed disabled:bg-opacity-10" type="submit">Send</button>
                    <div className={`px-4 mt-2 mr-2 ${sentNotification && sentNotification.includes('could not') ? '!bg-red-300/20 !text-red-300' : sentNotification && sentNotification.includes('was sent') ? '!bg-green-300/20 !text-green-300' : null} bg-white-300/20 text-white-300 transition-all duration-300 p-2 rounded-lg${sentNotification ? ' opacity-100' : ' opacity-0'}`}>
                        {sentNotification}
                    </div>
                    <LoadingIcons.TailSpin strokeOpacity={.4} speed={.75} className={`absolute mt-[0.7rem] left-[6.4rem] w-8 h-8${submitting ? ' block' : ' hidden'}`} />
                </div>
            </Form>
        </Formik>
    )
}