import fotoLupa from '../assets/lupa.png'
import fotoLogo from '../assets/logo.png'


const NavBar = ({ children }) => {
    return (
        <div className="navBar">
            <img className='logo' src={fotoLogo} alt="logo" />
            <div className="buscador">
                <img src={fotoLupa} alt="buscar" />
                <input type="text" placeholder="Busca una prenda" />
            </div>
            <ul className="sections">
                <nav>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Promos</a></li>
                    <li><a href="#">Nosotros</a></li>
                </nav>
            </ul>
            {children}
        </div>
    );
}

export default NavBar; 