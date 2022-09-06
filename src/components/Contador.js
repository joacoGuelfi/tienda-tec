import { useState } from 'react'

const Contador = () => {
    const [valor, setValor] = useState(0)
    return (
        <div className='contadorBox'>
            <h2>Nombre de la prenda</h2>
            {
                valor >= 0 ? <p>{valor}</p> : <p></p>
            }
            <div>
                <button onClick={() => {
                    setValor(valor - 1)
                }}>-</button>
                <button onClick={() => {
                    setValor(valor + 1)
                }}>+</button>


            </div>

        </div>
    )
}

export default Contador