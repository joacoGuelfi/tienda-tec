import articulos from './data/articulos.json';
const App = () => {
  return (
    <div className="App">
      {
        articulos.map(articulo => (
          <div>
            <p>Nombre: {articulo.nombre}</p>
            <p>Color: {articulo.color}</p>
            <p>Precio: ${articulo.valor}</p>
          </div>
        ))
      }
    </div>

  );
}

export default App;
