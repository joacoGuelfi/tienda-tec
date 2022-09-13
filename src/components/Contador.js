import { useState } from 'react'

const Contador = () => {
    const [valor, setValor] = useState(0)
    return (
        <div className='contadorBox'>


            <button onClick={() => {
                setValor(valor - 1)
            }}>-</button>
            {
                valor >= 0 ? <p>{valor}</p> : <p></p>
            }
            <button onClick={() => {
                setValor(valor + 1)
            }}>+</button>




        </div>
    )
}

export default Contador