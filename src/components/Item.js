import React from 'react'
import { useEffect, useState } from 'react';
import { getItem } from '../app/getItem';
import ItemDetail from './ItemDetail';

export const Item = () => {
    const [i, setI] = useState([]);

    useEffect(() => {
        getItem().then((articulos) => {
            setI(articulos)
        })
    }, [])
    return (

        <div className='cardArticulos'>
            {
                i.map((articulos, i) => <li key={i}>
                    <h2>{articulos.producto} </h2>
                    <img src="" alt="IMG" />
                    <button>Ver detalle del producto</button>
                    <ItemDetail item={articulos} />
                </li>)
            }

        </div>
    )


}
export default Item
