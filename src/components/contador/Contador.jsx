import React from 'react'
import { useState } from 'react'

const Contador = () => {
    const [contadorNumeros, setContadorNumeros] = useState(0);
    const contadorNoReactivo = 0;

    const contar = () => {
        console.log('Clickeado')
        setContadorNumeros(contadorNumeros + 1)
        // contadorNoReactivo = contadorNoReactivo + 1
    }

    return (
        <>
            <p>Contador: <span>{contadorNumeros}</span></p>
            {/* <p>Contador no reactivo: <span>{contadorNoReactivo}</span></p> */}
            <button onClick={contar}>
            Contar
            </button>
        </>
    )
}

export default Contador