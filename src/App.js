//import './App.css';
import Saludo from './components/saludo/Saludo';
import MyButton from './components/MyButton/MyButton';
import Header from './components/Header/Header';
import FooterComponent from './components/Footer/FooterComponent';


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
      <MyButton/>
      <FooterComponent/>
    </div>
  );
}

export default App;