'use client'

// Imports
import React, { useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

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

    // Contact form submit function
    const onSubmit = (values) => {
        // TODO: Actually send the email
        setSentNotification("Your message was sent successfully!")
    }

    // Return contact form
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form autocomplete="off">
                <div className="relative">
                    <Field className="bg-white/5 p-2 rounded-lg w-full transition-all duration-200 outline-0 focus:bg-white/10 disabled:cursor-not-allowed" disabled={sentNotification} placeholder="Name" type="text" id="name" name="name" />
                    <ErrorMessage className="absolute top-0 right-0 p-2 text-rose-400" name="name" component="div" />
                </div>

                <div className="relative mt-2">
                    <Field className="bg-white/5 p-2 rounded-lg w-full transition-all duration-200 outline-0 focus:bg-white/10 disabled:cursor-not-allowed" disabled={sentNotification} placeholder="Email" type="email" id="email" name="email" />
                    <ErrorMessage className="absolute top-0 right-0 p-2 text-rose-400" name="email" component="div" />
                </div>

                <div className="relative mt-2">
                    <Field className="bg-white/5 p-2 rounded-lg w-full transition-all duration-200 outline-0 focus:bg-white/10 disabled:cursor-not-allowed" disabled={sentNotification} placeholder="Subject" type="text" id="subject" name="subject" />
                    <ErrorMessage className="absolute top-0 right-0 p-2 text-rose-400" name="subject" component="div" />
                </div>

                <div className="relative mt-2">
                    <Field className="bg-white/5 p-2 rounded-lg w-full transition-all duration-200 outline-0 focus:bg-white/10 disabled:cursor-not-allowed" disabled={sentNotification} placeholder="Message" as="textarea" id="message" name="message" />
                    <ErrorMessage className="absolute top-0 right-0 p-2 text-rose-400" name="message" component="div" />
                </div>

                <div className="overflow-hidden flex">
                    <button disabled={sentNotification} className="px-4 mt-2 mr-2 bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 p-2 rounded-lg disabled:cursor-not-allowed disabled:bg-opacity-10" type="submit">Send</button>
                    <div className={`px-4 mt-2 mr-2 bg-green-300/20 text-green-300 transition-all duration-300 p-2 rounded-lg${sentNotification ? ' opacity-100' : ' opacity-0'}`}>
                        {sentNotification}
                    </div>
                </div>
            </Form>
        </Formik>
    )
}