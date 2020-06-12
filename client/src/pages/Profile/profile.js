
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom"
import pyramid from "../../components/images/pyramid.jpg"
import avatar from "../../components/images/Missing_avatar.png"
// import ImageUploader from 'react-images-upload';
import API from "../../utils/API";
import './splash.css';
// import HomeScene from "../../components/HomeScene/index"
import UserContext from "../../content/UserContext";
import ImageModal from "./ImageModal"
import AvatarModal from "./AvatarModal"

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [users, setUsers] = useState([])
  //   const [formObject, setFormObject] = useState({
  //     username: "",
  //     password: "",
  //     email: ""
  //   })

  useEffect(() => {
    API.getUsers()
      .then(res => {
        console.log(res)
        setUsers(res.data)
      }
      ).catch(err => console.log(err))
  }, [])


  const history = useHistory();

  const handleFavorites = () => {
    history.push("/favorites")
  }

  const handleExhibit = () => {
    history.push("/exhibit")
  }

  const handleLogin = () => {
    history.push("/login")
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
  //add page to update user info and add user avatar

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="row">

            {userData.user ? (
              <>
                <h2 className="profileheader">Welcome {userData.user.username} </h2>
                <hr></hr>
                <p>Feel free to update your profile as you see fit.</p>
                {/* <div className="container"> */}
                {/* <div> */}

                <div className="col s12 avatar-div">
                  <img className="circle profile-avatar" alt="" src={avatar} />
                  <div className="middle">
                  {/* <i class=" create fas fa-user-edit" ></i> */}

                  <a class="btn-floating btn-large waves-effect waves-light red" data-target="modal3" class="modal-trigger"> <i class=" create fas fa-user-edit" ></i></a>
                  </div>

                </div>
                <div className="col s12">

                  <span >
                    <p><i className="social-i fas fa-map-marker-alt"></i> Name</p>
                    <p><i className="social-i fas fa-envelope-open-text"></i> Email: </p>
                    <p><i className="social-i fas fa-unlock-alt"></i> Password:</p>
                  </span>
                </div>
                <div className="col s12 disable">
                <AvatarModal/>
              </div>
                {/* <ImageModal/> */}
                <div className="col s12 m6">
               <ImageModal className="btn btn-default" />
                </div>
                <div className="col s12 m6">
                  <button type="submit" className="btn btn-default" onClick={handleFavorites}>View Favorites</button>
                </div>

                <div className="col s12 m6">
                  <button type="submit" className="btn btn-default" onClick={handleExhibit}>Le LouVr3D</button>
                </div>
                <div className="col s12 m6">
                  <button type="submit" className="btn btn-default" onClick={handleExhibit}>Look up Art</button>
                </div>

                <div className="col s12">
                  <button type="submit" className="btn btn-default" onClick={handleLogout}>Logout</button>
                </div>
              </>
            ) : (
                <>
                  <div className="col s5">
                    <button type="submit" className="btn btn-default" onClick={handleLogin}>Login</button>
                  </div>
                </>
              )}

          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile;