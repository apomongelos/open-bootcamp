import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Contact } from '../../../models/contact.class';

const ContactFormik = ({ add }) => {

    const contactSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Name too short').max(50, 'Name too long!').required('Name is required'),
        surname: Yup.string().min(2, 'Surname too short').max(50, 'Surname too long').required('Surname is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
    });

    const initialValues = {
        name: '',
        surname: '',
        email: '',
    }

    function addContact(values) {
        const newContact = new Contact(
            values.name,
            values.surname,
            values.email,
            false
        );
        add(newContact);
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        addContact(values)
                        actions.resetForm({});
                        actions.setSubmitting(false);
                    }, 1000)
                }}
            >
                {({ touched,
                    errors,
                    isSubmitting }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field id="name" type="text" name="name" placeholder="Insert name" />

                        {/* Name Errors */}
                        {
                            errors.name && touched.name && (
                                <ErrorMessage name="name" component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="surname">Surname</label>
                        <Field id="surname" type="text" name="surname" placeholder="Insert surname" />

                        {/* Surname Errors */}
                        {
                            errors.surname && touched.surname && (
                                <ErrorMessage name="surname" component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Email Errors */}
                        {
                            errors.email && touched.email && (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }

                        <button type="submit">Register Contact</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactFormik;
