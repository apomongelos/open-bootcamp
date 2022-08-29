import React, { useState, useEffect } from 'react';

const Clock = () => {
    const defaultState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José',
    };

    const [user, setUser] = useState(defaultState);

    useEffect(() => {
        const timerID = setInterval(() => {
            tick();
        }, 1000);
        return () => {
            clearInterval(timerID)
        };
    });

    const tick = () => {
        return setUser({
            fecha: new Date(),
            edad: user.edad + 1,
            nombre: user.nombre,
            apellidos: user.apellidos,
        })
    }
    return (
        <div>
            <h2>
                Hora Actual:
                {user.fecha.toLocaleTimeString()}
            </h2>
            <h3>{user.nombre} {user.apellidos}</h3>
            <h1>Edad: {user.edad}</h1>
        </div>
    );
}

export default Clock;
