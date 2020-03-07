import React from 'react';

const Option = ({ titulo, cambiarNombre }) => {
    const options = ['Hola', 'texto', 'dos'];

    return (
        <ul>
            {options.map((text) => (
                <li>{text}</li>
            ))}
        </ul>
    );
};

export default Option;
