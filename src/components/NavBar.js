import fotoLupa from '../assets/lupa.png'
import fotoLogo from '../assets/logo.png'
import { Link } from 'react-router-dom';


const NavBar = ({ children }) => {
    return (
        <div className="navBar">
            <Link to="/"><img className='logo' src={fotoLogo} alt="logo" /></Link>
            <div className="buscador">
                <img src={fotoLupa} alt="buscar" />
                <input type="text" placeholder="Busca una prenda" />
            </div>
            <ul className="sections">
                <nav>
                    <li><Link to="/">Home</Link>  </li>
                    <li><Link to="/categories/camisas">Camisas</Link> </li>
                    <li><Link to="/categories/pantalones">Pantalones</Link> </li>
                    <li><Link to="/categories/abrigos">Abrigos</Link> </li>
                </nav>
            </ul>
            {children}
        </div>
    );
}

export default NavBar; 