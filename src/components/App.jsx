/*
    This is where our React App will live,
    and where we will be working
*/
import React from 'react';
import Camera from './Camera';
import Options from './Options';
import SocialLinks from './SocialLinks';
import randomInRange from '../random';

// This JSON will be our "back-end" (data)
const API_URL =
    'https://gist.githubusercontent.com/Nikodermus/8e12541f8cf2ad17155169e638cd193f/raw/8bbbacc31f4b9c1a10f37725f30a57b208e28307/face-filters.json';

const App = () => {
    const [activo, cambiarActivo] = React.useState('');
    const [indiceImagen, cambiarImgActiva] = React.useState(
        0
    );
    const [position, setPosition] = React.useState(null);
    const [filters, ponerFiltros] = React.useState(null);
    const [source, cambiarSource] = React.useState('');

    const ruletaDeoptions = (
        maxCantidad,
        indiceActual = 0,
        cantVecesLlamado = 0
    ) => {
        if (cantVecesLlamado > 15) {
            cambiarImgActiva(randomInRange(0, maxCantidad));
            return;
        }

        const indiceNuevo =
            indiceActual + 1 > maxCantidad
                ? 0
                : indiceActual + 1;

        cambiarImgActiva(indiceNuevo);

        setTimeout(() => {
            ruletaDeoptions(
                maxCantidad,
                indiceNuevo,
                cantVecesLlamado + 1
            );
        }, 20);
    };

    React.useEffect(() => {
        if (!activo) return;

        ruletaDeoptions(filters[activo].options.length - 1);
    }, [activo]);

    React.useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                ponerFiltros(data.filters);
                cambiarSource(data.source);
            });
    }, []);

    return (
        <>
            <div className="layout__video">
                <Camera
                    setPosition={setPosition}
                    speed={20}
                ></Camera>
                {activo && (
                    <img
                        src={`${source}${filters[activo].options[indiceImagen]}`}
                        alt=""
                        className="active-img"
                        style={{
                            maxWidth: `${position.width}px`,
                            maxHeight: `${position.height}px`,
                            top: `${position.top}px`,
                            left: `${position.left}px`,
                        }}
                    />
                )}
            </div>

            {filters && (
                <Options
                    activo={activo}
                    filters={filters}
                    cambiarActivo={cambiarActivo}
                    source={source}
                ></Options>
            )}

            <SocialLinks></SocialLinks>
        </>
    );
};

export default App;
