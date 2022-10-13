import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactList from '../../components/container/contact_list';

const TaskDashBoard = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('user') || null;

    const navigateTo = (path) => {
        localStorage.removeItem('user');
        navigate(path);
    }

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    });
    return (
        <div>
            <ContactList></ContactList>
            <button onClick={() => navigateTo('/login')} >Salir</button>
        </div>
    );
}

export default TaskDashBoard;
