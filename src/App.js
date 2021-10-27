import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import AuthProvider from './Context/AuthProvider';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MemberShip from './Components/Membership/MemberShip';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register'
import SeeMore from './Components/SeeMore/SeeMore';
import Services from './Components/Services/Services';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Doctors from './Components/Doctors/Doctors';
import DoctorInfo from './Components/DoctorInfo/DoctorInfo';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/service">
              <Services></Services>
            </Route>

            <PrivateRoute exact path="/seemore/:serviceId">
              <SeeMore></SeeMore>
            </PrivateRoute>


            <PrivateRoute exact path="/membership">
              <MemberShip></MemberShip>
            </PrivateRoute>

            <PrivateRoute exact path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            <PrivateRoute exact path="/doctorinfo/:doctorId">
              <DoctorInfo></DoctorInfo>
            </PrivateRoute>

            <Route exact path="/contactus">
              <Contact></Contact>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
