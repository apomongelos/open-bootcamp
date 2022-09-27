import React, { useState } from 'react';

const Square = () => {
    const [color, setColor] = useState('black');
    const [manageInterval, setManageInterval] = useState(0);

    const generateColor = () => Math.floor(Math.random() * 256);

    const generateRGB = () => setColor(`rgb(${generateColor()},${generateColor()},${generateColor()})`);

    const onChangeColor = () => {
        return setManageInterval(setInterval(generateRGB, 1500));
    }

    const onStopChangeColor = () => {
        return clearInterval(manageInterval);
    }

    const onClickChangeColor = () => {
        return clearInterval(manageInterval);
    }

    return (
        <div
            id="square"
            onMouseOver={onChangeColor}
            onMouseLeave={onStopChangeColor}
            onDoubleClick={onClickChangeColor}
            style={{ width: '255px', height: '255px', backgroundColor: color, margin: 'auto' }}>
        </div>
    );
}

export default Square;
