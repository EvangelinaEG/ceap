import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './container/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar logo = {logo} />
      <ItemListContainer mensaje = 'Ofertas de la semana'/>
    </div>
  );
}

export default App;
