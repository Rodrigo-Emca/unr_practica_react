import React from 'react'

const Product = () => {

    const productos = [
        { title: 'Manzana', id: 1},
        { title: 'Peras', id: 2},
        { title: 'Frutillas', id: 3},
        { title: 'Bananas', id: 4}
    ]
    return (
        <>
        <div>
            <h3>Lista de productos:</h3>
            <ul>
                {productos.map(productos => (
                    <li key={productos.id}>
                        {productos.id} | {productos.title}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Product
