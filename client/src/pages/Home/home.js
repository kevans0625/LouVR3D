import React, {useContext} from "react";
import {useHistory} from "react-router-dom"
import pyramid from "../../components/images/pyramid.jpg"
import HomeScene from "../../components/HomeScene/index"
import './home.css'
import UserContext from "../../content/UserContext";
// import M from "materialize-css"


const Home = () => {
  const {userData, setUserData} = useContext(UserContext);

  const history = useHistory(); 

  const handleLogin = () => {
    history.push("/login")
  //   window.location.replace("/login");
  }

  const handleSignup = () => {
    history.push("/signup")
  //   window.location.replace("/signup");
  }

  const handleLogout = () => {
    history.push("/logout")
  //   window.location.replace("/signup");
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

            {userData.user ? (

            <div className="col s12">
            <button type="submit" className="btn btn-default" href="/login"
              onClick={handleLogout}>Logout</button>
              </div>

            ):(
              <>
            <div className="col s6">
            <button type="submit" className="btn btn-default" href="/login"
              onClick={handleLogin}>Log In</button>
              </div>
              <div className="col s6">
            <button type="submit" className="btn btn-default" href="/signup"
              onClick={handleSignup}>Sign Up</button>
                </div>
              </>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;