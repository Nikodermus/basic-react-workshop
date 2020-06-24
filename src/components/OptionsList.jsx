import React from 'react';

const OptionsList = ({
    elem,
    id,
    cambiarActivo,
    source,
    active,
}) => {
    const [visible, cambiarVisible] = React.useState(false);

    return (
        <li
            className={`square square--${
                active === id ? 'large' : 'small'
            }`}
            onMouseEnter={() => {
                cambiarVisible(true);
            }}
            onMouseLeave={() => {
                cambiarVisible(false);
            }}
            onClick={() => {
                cambiarActivo(id);
            }}
        >
            <img src={source + elem.options[0]} alt="" />
            <span
                className={`tooltip tooltip--${
                    visible ? 'visible' : ''
                }`}
            >
                {elem.tooltip}
            </span>
        </li>
    );
};

export default OptionsList;
