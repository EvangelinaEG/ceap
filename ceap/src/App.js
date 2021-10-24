import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './itemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { UiProvider } from './context/UiContext';

function App() {


  return (
    <div className="App">
     <UiProvider>
      <CartProvider>
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
          <Cart></Cart>
        </Route>
        <Route exact path= '*'>
          <Redirect to = '/'/>
        </Route>
      </Switch>
      </BrowserRouter >
      </CartProvider>
      </UiProvider>
    </div>
    
  );
}

export default App;
