import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Profile from './components/Profile/profile';
import Exhibit from './components/Exhibit/exhibit';

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
      {/* <Route exact path="/users/:id"/>   */}
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
