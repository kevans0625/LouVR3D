import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import Profile from './pages/Profile/profile';
import Exhibit from './pages/Exhibit/exhibit';
import Favorites from './pages/Favorites/favorites';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      {/* <Route exact path={["/", "/users"]}/> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/exhibit" component={Exhibit} />
      <Route exact path="/favorites" component={Favorites} />
      {/* <Route exact path="/users/:id"/>   */}
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
