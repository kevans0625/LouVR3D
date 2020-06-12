import React, {useContext} from "react";
import {useHistory} from "react-router-dom"
import pyramid from "../../components/images/pyramid.jpg"
import HomeScene from "../../components/HomeScene/index"
import './splash.css'
import UserContext from "../../content/UserContext";
import M from "materialize-css"
import Sidenav from "../../components/SideNav/sidenav";



const Splash = () => {
  const {userData, setUserData} = useContext(UserContext);

  const history = useHistory(); 

  const handleProfile = () => {
    history.push("/splash")
  }
  const handleFavorites = () => {
    history.push("/favorites")
  }

  const handleExhibit = () => {
    history.push("/exhibit")
  }

  const handleLogin = () => {
    history.push("/login")
  //   window.location.replace("/login");
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
  }

  //nave section to be add 
   // - update profile 
   //visit Le LouVr3D
   //search for cool art
   //visit a museum 
   //

  return (
    <div>
      <HomeScene/>
      <div className="margin-top">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-12"> */}
            {/* <h2>Welcome{}</h2> */}
            {/* <Sidenav /> */}
            <img id="pyramid" alt="" src={pyramid} />
            <br />
            <h2 className="splashheader">Welcome to Le LouVr3D</h2>
<Sidenav/>
            {userData.user ? (
  <>
  <p>View the vast collection of the art in Le LouVr3d.</p>

            <div className="col s5">
            <button type="submit" className="btn btn-default" href="/login"
              onClick={handleLogout}>Logout</button>
              </div>
            <div className="col s5">
            <button type="submit" className="btn btn-default" href="/splash"
              onClick={handleProfile}>Edit Profile</button>
              </div>
              <div className="col s5">
            <button type="submit" className="btn btn-default" href="/login"
              onClick={handleFavorites}>View Favorites</button>
              </div>
                  <div className="col s5">
                  <button type="submit" className="btn btn-default" href="/login"
                    onClick={handleExhibit}>Le LouVr3D</button>
                    </div>
  </>
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
    // </div>

  )
}

export default Splash;