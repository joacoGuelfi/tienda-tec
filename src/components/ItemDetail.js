import React from 'react'
import Contador from './Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0)
    return (
        <div className='itemDetail'>

            <h2>Informacion Detallada</h2>
            <h3>{item.name} </h3>
            <img src="" alt="IMG" />
            <p>ID: {item.id}</p>
            <p>Marca: {item.marca}</p>
            <p>Talle: {item.talle}</p>
            <p>Precio: {item.precio}</p>
            {
                count === 0 ?
                    <Contador onAdd={(valor) => {
                        setCount(valor);
                    }} />
                    :
                    <Link to={`/cart`}>Terminar Compra</Link>
            }


        </div>
    )
}
export default ItemDetail