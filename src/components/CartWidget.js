import fotoCarrito from '../assets/carrito.png'


export const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <img className="carrito" src={fotoCarrito} alt="carrito" />
        </div>
    )
}
export default CartWidget
