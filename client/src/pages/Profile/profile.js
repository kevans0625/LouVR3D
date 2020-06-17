
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom"
import pyramid from "../../components/images/pyramid.jpg"
// import avatar from "../../components/images/Missing_avatar.png"
// import ImageUploader from 'react-images-upload';
import API from "../../utils/API";
import './profile.css';
// import HomeScene from "../../components/HomeScene/index"
import UserContext from "../../content/UserContext";
import ImageModal from "../Splash/ImageModal"
import AvatarModal from "./AvatarModal"
import Sidenav from "../../components/SideNav/sidenav";

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [users, setUsers] = useState([])
  const [favorites, setFavorites] = useState([])

  // console.log(users)
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
    console.log(userData.user.id)
   let id = userData.user.id
    API.findFavorites({}, { userID: id })
      .then(res => {
        console.log(res)
        // setFavorites(res.data)
      }
      )
      .catch(err => {
        console.log(err)
      });

  }

  const handleLogin = () => {
    history.push("/login")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="break">
          <br />
        </div>
        <div className="col-md-6 col-md-offset-3">
          <div className="row">
            {userData.user ? (
              <>
                <Sidenav
                  userData={userData}
                />
                <div className="row white">

                  <h2 className="profileheader">{userData.user.username}'s Profile</h2>
                  <hr></hr>
                  <p>Feel free to update your profile as you see fit.</p>

                  <div className="row">
                    <div className="col s12 m3 avatar-div">
                      <img className="circle profile-avatar" alt="" src={userData.user.avatar} />
                      <div className="middle">
                      </div>

                    </div>

                    <div className="col s12 m6">
                      <span>
                        <p><i className="social-i fas fa-tag"></i> Tagline: {userData.user.tagline}</p>
                        <p><i className="fas fa-user-edit" ></i> Bio: {userData.user.bio}</p>
                        <p><i class="fas fa-birthday-cake"></i> Age: {userData.user.age} </p>
                        <AvatarModal />
                      </span>
                    </div>
                  </div>

                    <hr/>
                  <div className="col s12 m6">
                  <p>Click below to add images to Le LouVr3d.</p>

                  <ImageModal />
                </div>
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