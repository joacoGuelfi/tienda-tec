import React from 'react'
import { useEffect, useState } from 'react';
import { getItem } from '../app/getItem';

export const Item = ({ fotos }) => {
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
                    <img src={fotos} alt="" />
                    <div className='marca'> {articulos.marca}</div>
                    <div className='precio'> {articulos.precio}</div>
                </li>)
            }

        </div>
    )


}
export default Item
