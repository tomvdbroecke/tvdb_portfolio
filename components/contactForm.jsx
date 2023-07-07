import React from "react"
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

// Contact form submit function
const onSubmit = (values, { resetForm }) => {
    console.log(values);
    // Your API logic or submit logic here
    resetForm();
}

// Contact Form component
export default function ContactForm() {
    // Return contact form
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" component="div" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>

                <div>
                    <label htmlFor="subject">Subject</label>
                    <Field type="text" id="subject" name="subject" />
                    <ErrorMessage name="subject" component="div" />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <Field as="textarea" id="message" name="message" />
                    <ErrorMessage name="message" component="div" />
                </div>

                <button type="submit">Send</button>
            </Form>
        </Formik>
    )
}