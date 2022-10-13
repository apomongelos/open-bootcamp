import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ loginUser }) => {

    const loginSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Name too short').max(50, 'Name too long!').required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
    });

    const initialValues = {
        name: '',
        email: '',
    }

    function login(values) {
        const newContact = {
            name: values.name,
            email: values.email,
        };
        loginUser(newContact);
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        login(values)
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

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Email Errors */}
                        {
                            errors.email && touched.email && (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }

                        <button type="submit">Login User</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;
