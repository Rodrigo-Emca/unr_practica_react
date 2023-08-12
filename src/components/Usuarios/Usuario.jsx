import React from 'react'
import './usuario.css'

const Usuario = () => {
    const user = {
        name: 'Lucas',
        lastname: 'Saavedra',
        age: 20,
        imageURL: 'https://pm1.aminoapps.com/7089/084ebccd61df593caf21d0892abff7c8d0068fe3r1-736-561v2_hq.jpg',
        imageSize: 150,
    }

    return (
        <div className='contenedorUsuario'>
        {`${user.name} ${user.lastname}`}
        <img src={user.imageURL} alt='ImagenPerfil' height={user.imageSize} width={user.imageSize}/>
        { user.age>18 ? 'Mayor de edad':'Menor de edad'} {/* condicional ternario: forma reducida de hacer if else */}
        </div>
    )
}

export default Usuario
