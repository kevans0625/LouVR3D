import React from "react";
import pyramid from "../../components/images/pyramid.jpg"
import HomeScene from "../../components/HomeScene/index"
import './home.css'
// import M from "materialize-css"


const Home = () => {

  const handleLogin = event => {
    window.location.replace("/login");
  }

  const handleSignup = event => {
    window.location.replace("/signup");
  }
  return (
    <div>
      <HomeScene/>
      <div className="margin-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            {/* <h2>Welcome{}</h2> */}
            <img id="pyramid" alt="" src={pyramid} />
            <br />
            <h2>Welcome to Le LouVr3D</h2>
            <div className="col s6">
            <button type="submit" className="btn btn-default" href="/login"
              onClick={handleLogin}>Log In</button>
              </div>
              <div className="col s6">
                
            <button type="submit" className="btn btn-default" href="/signup"
              onClick={handleSignup}>Sign Up</button>
                </div>
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;