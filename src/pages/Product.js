import ItemDetailContainer from "../components/ItemDetailContainer"
import { useParams } from "react-router-dom"
import { getItem } from "../app/getItem"
import { useEffect } from "react"
import { useState } from "react"

const Product = () => {
    const { id } = useParams()
    const [i, setI] = useState([]);

    useEffect(() => {
        getItem().then((articulos) => {
            setI(articulos)
        })

    }, [])

    return (
        <div>
            {
                <h1>{id.producto}</h1>
            }
        </div>
    )
}

export default Product