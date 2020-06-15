import React, {useContext} from "react";
import {useHistory} from "react-router-dom"
import pyramid from "../../components/images/pyramid.jpg"
import HomeScene from "../../components/HomeScene/index"
import './louvr3d.css'
import UserContext from "../../content/UserContext";
// import M from "materialize-css"
import Sidenav from "../../components/SideNav/sidenav";

const LouVr3D = () => {
  const {userData, setUserData} = useContext(UserContext);

  const history = useHistory(); 

  const handleMet = () => {
    history.push("/view")
  }


  const handleLogin = () => {
    history.push("/login")
  }

  const handleSignup = () => {
    history.push("/signup")
  //   window.location.replace("/signup");
  }


  const handleView = () => {
    history.push("/upload")
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
   {/*  <img id="pyramid" alt="" src={pyramid} /> */}
            <br />
            <div className="col s12 m6">
            <h2 className="homeheader">Welcome to Le LouVr3D</h2>
            <h5 className="white-text">TOUCH, DIVE &amp; EXPLORE</h5>
<p className="white-text">View our virtual world of 3D experiences</p>
            </div>
            {userData.user ? (
              <div
>              <div className="col s12 m6">
              <Sidenav
              userData={userData}
              />
              </div>
              <div className="col s12">
           
            <button type="submit" className="btn btn-default" href="/viewlouvr3d"
              onClick={handleView}>View Le LouVr3D</button>
             
  <button type="submit" className="btn btn-default" href="/viewmet"
  onClick={handleMet}>View Met Images </button>
  </div>
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

export default LouVr3D;