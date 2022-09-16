import React from 'react'
import { useEffect, useState } from 'react';
import { getItem } from '../app/getItem';
import { Link } from 'react-router-dom';

export const Item = () => {
    const [i, setI] = useState([]);

    useEffect(() => {
        getItem().then((articulos) => {
            setI(articulos)
            console.log(articulos)
        })
    }, [])

    return (

        <div className='cardArticulos' >
            {
                i.map((articulos, i) => <li key={i}>
                    <h2>{articulos.producto} </h2>
                    <img src={articulos.foto} alt="IMG" />
                    <button> <Link to={`/product/${articulos}`}>See More </Link> </button>
                </li>)
            }

        </div >

    )


}
export default Item
