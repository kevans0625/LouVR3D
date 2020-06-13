import React, {useContext} from "react";
import {useHistory} from "react-router-dom"
import pyramid from "../../components/images/pyramid.jpg"
import HomeScene from "../../components/HomeScene/index"
import './home.css'
import UserContext from "../../content/UserContext";
// import M from "materialize-css"
import Sidenav from "../../components/SideNav/sidenav";

const Home = () => {
  const {userData, setUserData} = useContext(UserContext);

  const history = useHistory(); 

  const handleLogin = () => {
    history.push("/login")
  }

  const handleSignup = () => {
    history.push("/signup")
  //   window.location.replace("/signup");
  }

  const handleLogout = () => {
   setUserData({
     token: undefined,
     user: undefined
   })
   localStorage.setItem("auth-token", "")
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
            <h2 className="homeheader">Welcome to Le LouVr3D</h2>
            <h5 className="white-text">TOUCH, DIVE, &amp; EXPLORE</h5>

<p className="white-text">Creating a virtual world of 3D experiences</p>
            {userData.user ? (
              
              <div className="col s12">
              <Sidenav
              userData={userData}
              />
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