import './styles/style.css'
import Router from './app/Router';
import Provider from './app/Provider';
import ItemDetail from './components/ItemDetail';

const App = () => {
  return (
    <div className="App">
      <Provider>
        <Router />

      </Provider>



    </div>

  );
}

export default App;
