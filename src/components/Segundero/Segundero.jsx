import React, { useState, useEffect } from 'react';

function Timer() {
    const [segundos, setSegundos] = useState(0);
    useEffect(() => {
    const intervalo = setInterval(() => {
    setSegundos(segundos + 1);
    }, 1000);

    return () => clearInterval(intervalo);
    }, [segundos]);
    
    return <p>Tiempo transcurrido: {segundos} segundos</p>;
}
export default Timer;