//import './App.css';
import Saludo from './components/saludo/Saludo';


function App() {

  let estilos = {
    color: 'orange',
    border: '1px black solid',
    paddingTop: 10,
  }

  return (
    <div className="App" >
      <h1 style={estilos}>React App</h1>
    </div>
  );
}

export default App;