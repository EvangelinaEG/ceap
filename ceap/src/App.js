import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './itemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom'
import { CartContext } from './context/CartContext';
import { useState } from 'react';



function App() {

  const [ carrito, setCarrito] = useState([])
console.log(carrito)
const addToCart = (item) => {
  setCarrito( [...carrito, item] )
}

  return (
    <CartContext.Provider value={{
      addToCart
    }} >
    <div className="App">
      
      <BrowserRouter >
      <NavBar logo = {logo} />
      
      <Switch>
        <Route exact path= '/'>
          <ItemListContainer />
        </Route>
        <Route exact path= '/productos/:categoryId'>
          <ItemListContainer />
        </Route>
        <Route exact path='/detail/:itemId'>
            <ItemDetailContainer />
        </Route>
        <Route exact path= '/cart'>
          <h1>Carrito</h1>
        </Route>
        <Route exact path= '*'>
          <Redirect to = '/'/>
        </Route>
      </Switch>
      </BrowserRouter >
      
    </div>
    </CartContext.Provider>
  );
}

export default App;
