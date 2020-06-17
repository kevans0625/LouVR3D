import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom"
import API from "../../utils/API";
import M from "materialize-css"
import UserContext from "../../content/UserContext";
import Modal from "../Signup/modal"
import Sidenav from "../../components/SideNav/sidenav";
import pyramid from "../../components/images/pyramid.jpg"


const Login = () => {
  const [users, setUsers] = useState([])
  const [formObject, setFormObject] = useState({
    username: "",
    password: "",
    error: ""
  })

  useEffect(() => {
    API.getUsers()
      .then(res => {
        setUsers(res.data)
      }
      ).catch(err => console.log(err))
  }, [])

  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory()

  const handleInputChange = event => {
    const { name, value } = event.target
    setFormObject({ ...formObject, [name]: value })
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (formObject.username && formObject.password) {
      API.loginUser({
        username: formObject.username,
        password: formObject.password
      }).then((res) => {
        console.log(res)
        if (res.status === 200) {
          M.toast({ html: 'Success!' })
          console.log(res.data.token)
          setUserData({
            token: res.data.token,
            user: res.data.user
          })
          localStorage.setItem("auth-token", res.data.token)
          history.push("/profile")
        }
      }).catch((res) => {
        console.log(res)
        return M.toast({ html: 'Invalid credentials!' })
      })
    }
  }


  const handleLogout = () => {
    setUserData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem("auth-token", "")
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">

            <br />
            {userData.user ? (
              <div >
                <Sidenav
                  userData={userData}
                />
                <div className="col s12">
                  <div className="col m1">
                    <img
                      alt=""
                      src={pyramid}
                      className="pyramid"
                    />
                  </div>
                  <div className="col m11">
                    <h2 className="white-text">{userData.user.username}, you are already logged in.</h2>
                  </div>
                </div>
                <button type="submit" className="btn btn-default" href="/login"
                  onClick={handleLogout}>Logout</button>
              </div>

            ) : (
                <>
                  <div className="col m1">
                    <img
                      alt=""
                      src={pyramid}
                      className="pyramid"
                    />
                  </div>
                  <div className="col m10">
                    <h2 className="white-text">Login to Le LouVr3D</h2>
                  </div>

                  <form className="signup">
                    <div className="form-group">
                      <input
                        // type="username"  
                        className="form-control white-text"
                        id="username-login-input"
                        placeholder="Username (required)"
                        onChange={handleInputChange}
                        name="username" />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control white-text"
                        id="password-login-input"
                        placeholder="Password (required)"
                        onChange={handleInputChange}
                        name="password" />
                    </div>
                    <button type="submit" className="btn btn-default"
                      disabled={!(formObject.username || formObject.password)}
                      onClick={handleFormSubmit}
                    >Login
        </button>
                  </form>
                  <br />
                  <Modal />
                </>
              )}
            {console.log(userData)}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login;