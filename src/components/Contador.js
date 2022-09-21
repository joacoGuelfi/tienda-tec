import { useState } from 'react'

const Contador = ({ onAdd }) => {
    const [valor, setValor] = useState(0)
    const sumar = () => setValor(valor + 1)
    const restar = () => setValor(valor > 0 ? valor - 1 : valor)
    return (
        <div>
            <div className='contadorBox'>
                <button onClick={restar}>-</button>

                <p>{valor}</p>

                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default Contador