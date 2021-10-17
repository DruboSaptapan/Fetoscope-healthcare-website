import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Header></Header>
          <Route></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
