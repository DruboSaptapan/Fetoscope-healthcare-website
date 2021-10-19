import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Price from './Components/Price/Price';
import Register from './Components/Register/Register'
import SeeMore from './Components/SeeMore/SeeMore';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/service">
            <Services></Services>
          </Route>

          <Route path="/seemore/:serviceId">
            <SeeMore></SeeMore>
          </Route>

          <Route path="/pricing">
            <Price></Price>
          </Route>

          <Route path="/aboutus"></Route>

          <Route path="/contactus">
            <Contact></Contact>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
