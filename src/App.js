import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './pages/Navigation/Navigation';
import Services from './pages/Services/Services';
import Doctors from './pages/Doctors/Doctors';
import Footer from './pages/Footer/Footer';
import Notfound from './pages/Notfound/Notfound';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Login from './pages/Login/Login/Login';
import Authprovider from './contexts/Authprovider';
import Privateroute from './pages/Login/Login/Privateroute/Privateroute';

function App() {
  return (
    <div className="App">
      <Authprovider>
      <Router>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/treatments">
              <Services></Services>
          </Route>
          <Route path="/doctors">
              <Doctors></Doctors>
          </Route>
          <Route path="/contact">
              <Contact></Contact>
          </Route>
          <Privateroute path="/details/:serviceId">
            <Details></Details>
          </Privateroute>
          <Route path="/register">
            <Login></Login>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </Authprovider>

      
      
    </div>
  );
}

export default App;
