import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './styles/style.css'
import { CartWidget } from './components/CartWidget';
import Contador from './components/Contador';
import Item from './components/Item';
import foto from "./assets/blazer.jpeg"

const App = () => {
  return (
    <div className="App">
      <NavBar>
        <CartWidget />
      </NavBar>
      <ItemListContainer greatings={"Welcome !"} />
      <Contador />
      <Item fotos={foto} />
    </div>

  );
}

export default App;
