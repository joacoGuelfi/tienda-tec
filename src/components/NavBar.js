import fotoCarrito from '../assets/carrito.png'
import fotoLupa from '../assets/lupa.png'
import fotoLogo from '../assets/logo.png'


const NavBar = () => {
    return (
        <div className="navBar">
            <img className='logo' src={fotoLogo} alt="logo" />
            <div className="buscador">
                <img src={fotoLupa} alt="buscar" />
                <input type="text" placeholder="Busca una prenda" />
            </div>
            <ul className="sections">
                <li><a href="#">Productos</a></li>
                <li><a href="#">Promos</a></li>
                <li><a href="#">Nosotros</a></li>
            </ul>
            <img className="carrito" src={fotoCarrito} alt="carrito" />

        </div>
    );
}

export default NavBar; 