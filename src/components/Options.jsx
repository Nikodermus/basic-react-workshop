import React from 'react';
import OptionsList from './OptionsList';

const Option = ({
    filters,
    cambiarActivo,
    source,
    activo,
}) => (
    <ul>
        {Object.keys(filters).map((key) => (
            <OptionsList
                elem={filters[key]}
                cambiarActivo={cambiarActivo}
                id={key}
                active={activo}
                source={source}
            ></OptionsList>
        ))}
    </ul>
);

export default Option;
