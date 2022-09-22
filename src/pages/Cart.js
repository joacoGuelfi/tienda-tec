import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../app/Provider'

const Cart = ({ product }) => {
    const [state, setState] = useContext(AppContext)
    console.log(product)
    return (
        <>
            <div>Cart {product}</div>

            <div>{state}</div>
        </>
    )
}

export default Cart