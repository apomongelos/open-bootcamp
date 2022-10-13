import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../../components/pure/forms/loginForm';

const LoginPage = () => {

    const [credentials, setCredentials] = useState(null);
    const navigate = useNavigate();

    function loginUser(contact) {
        localStorage.setItem('user', contact);
        setCredentials(contact);
        navigate('/dashboard');
    }
    const user = localStorage.getItem('user') || null;

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    });
    return (
        <div>
            <LoginForm loginUser={loginUser} />
            <Link to="/registro">Registrarse</Link>
        </div>
    );
}

export default LoginPage;
