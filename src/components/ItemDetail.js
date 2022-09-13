import React from 'react'
import Contador from './Contador'

export const ItemDetail = ({ item }) => {
    return (
        <div className='itemDetail'>

            <h2>Informacion Detallada</h2>
            <h3>{item.name} </h3>
            <img src="" alt="IMG" />
            <p>ID: {item.id}</p>
            <p>Marca: {item.marca}</p>
            <p>Talle: {item.talle}</p>
            <p>Precio: {item.precio}</p>
            <Contador />
            <button>Agregar al Carrito</button>

        </div>
    )
}
export default ItemDetail