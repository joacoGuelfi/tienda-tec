import { useState } from 'react'
import { AppContext } from "../app/Provider"
import { useContext } from "react"

const Contador = ({ onAdd }) => {
    const [valor, setValor] = useState(0)
    const sumar = () => setValor(valor + 1)
    const restar = () => setValor(valor > 0 ? valor - 1 : valor)
    const [state, setState] = useContext(AppContext)
    return (
        <div>
            <div className='contadorBox'>
                <button onClick={restar}>-</button>

                <p>{valor}</p>

                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={e => { setState(valor); onAdd(valor) }}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default Contador