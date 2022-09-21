import React from 'react'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getItem } from '../app/getItem'

const Categories = () => {
    const { categorie } = useParams()
    const [i, setI] = useState([]);

    useEffect(() => {
        getItem().then((articulos) => {
            setI(articulos)
        })
    }, [])
    return (
        <div className='cardArticulos'>
            {
                i.map((articulos, i) => {
                    articulos.categorie === categorie ? 
                        <div>
                            <li key={i}>
                                <h2>{articulos.producto} </h2>
                                <img src={articulos.foto} alt="IMG" />
                                <button> <Link to={`/product/${articulos.id}/${articulos.name}/${articulos.marca}/${articulos.talle}/${articulos.precio}`}>See More </Link> </button>
                            </li>
                        </div> :
                        <div>asd</div>
                })
            }
        </div>
    )
}

export default Categories