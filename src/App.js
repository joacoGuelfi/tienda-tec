import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './styles/style.css'
import { CartWidget } from './components/CartWidget';


const App = () => {
  return (
    <div className="App">
      <NavBar>
        <CartWidget />
      </NavBar>
      <ItemListContainer greatings={"Welcome !"} />
    </div>

  );
}

export default App;
