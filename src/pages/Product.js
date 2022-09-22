import { useParams } from "react-router-dom"
import Contador from "../components/Contador"
import { useState } from "react"
import { Link } from "react-router-dom"


const Product = () => {
    const [count, setCount] = useState(0)
    const { id, name, marca, talle, precio } = useParams()


    return (
        <div className="productDetails" >

            <h1 > {name} </h1 >
            <h2>{marca}</h2>
            <img src="" alt="IMG" />
            <p>Talle: {talle}</p>
            <p>Precio: {precio}</p>

            {
                count === 0 ?
                    <Contador onAdd={(valor) => {
                        setCount(valor);
                    }} />
                    :
                    <Link to={`/cart`}  >Terminar Compra</Link>

            }

        </div >
    )
}

export default Product