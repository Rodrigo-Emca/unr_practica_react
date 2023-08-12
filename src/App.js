//import './App.css';
import Saludo from './components/saludo/Saludo';
import MyButton from './components/MyButton/MyButton';
import Header from './components/Header/Header';
import FooterComponent from './components/Footer/FooterComponent';
import Usuario from './components/Usuarios/Usuario';
import Product from './components/Products/Product';
import Contador from './components/Contador/Contador';
import Timer from './components/Segundero/Segundero';

function App() {

  let estilos = {
    color: 'orange',
    border: '1px black solid',
    paddingTop: 10,
  }

  return (
    <div className="App" >
      <Header/>
      <h1 style={estilos}>React App</h1>
      <div className='mainAuxiliar'>
        <MyButton/>
        <Usuario/>
        <FooterComponent/>
        <Product/>
        <Contador/>
        <Timer/>
      </div>
    </div>
  );
}

export default App;