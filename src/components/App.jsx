/*
    This is where our React App will live,
    and where we will be working
*/
import React from 'react';
import Camera from './Camera';
import Options from './Options';
import SocialLinks from './SocialLinks';

// This JSON will be our "back-end" (data)
const API_URL =
    'https://gist.githubusercontent.com/Nikodermus/8e12541f8cf2ad17155169e638cd193f/raw/8bbbacc31f4b9c1a10f37725f30a57b208e28307/face-filters.json';

const App = () => {
    const [nombre, cambioNombre] = React.useState(
        'Nicolas'
    );

    return (
        <>
            <p className="title">Hola {nombre}</p>
            <span>!!!</span>
            <Camera></Camera>
            <Options
                cambiarNombre={cambioNombre}
                titulo={nombre}
            ></Options>
            <SocialLinks></SocialLinks>
        </>
    );
};

export default App;
