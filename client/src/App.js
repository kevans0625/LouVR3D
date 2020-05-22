import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/signup';

function App() {
  return (
      <Router>
    <div className="App">
    <Switch>
      {/* <Login /> */}
      <Route exact path={["/", "/users"]}>
      <Signup />
      </Route>
      <Route exact path="/users/:id">  
          </Route>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
