import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './itemListContainer/ItemListContainer'




import {
  BrowserRouter, Route, Switch
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <NavBar logo = {logo} />
      <ItemListContainer />
      <Switch>
        <Route exact path= '/'>
          
        </Route>
      </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;
