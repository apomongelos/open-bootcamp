import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/pure/forms/registerForm';

const RegisterPage = () => {
    const [credentials, setCredentials] = useState(null);
    const navigate = useNavigate();
    const user = localStorage.getItem('user') || null;

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    });
    function registerUser(contact) {
        localStorage.setItem('user', contact);
        setCredentials(contact);
        navigate('/dashboard');
    }
    return (
        <div>
            <RegisterForm onSubmit={registerUser} />
            <Link to="/login">Loguearse</Link>
        </div>
    );
}

export default RegisterPage;
