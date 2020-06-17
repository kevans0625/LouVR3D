import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom"
import API from "../../utils/API";
import M from "materialize-css"
import UserContext from "../../content/UserContext";
import pyramid from "../../components/images/pyramid.jpg"
import Sidenav from "../../components/SideNav/sidenav"
import $ from "jquery"

const Signup = () => {
  const [users, setUsers] = useState([])
  const [formObject, setFormObject] = useState({
    username: "",
    email: "",
    password: "",
    error: ""
  })
  const { userData, setUserData } = useContext(UserContext);
  useEffect(() => {
    API.getUsers()
      .then(res => {
        setUsers(res.data)
      }
      ).catch(err => console.log(err))
  }, [])

  const history = useHistory()

  const handleInputChange = event => {
    const { name, value } = event.target
    setFormObject({ ...formObject, [name]: value })
   
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // var ele = document.getElementsByTagName('input');
    // console.log(ele.checked)
    // let imagelink = $('input[name="avatarCheck"]:checked').val();
    // console.log(imagelink)
    if (formObject.username && formObject.email && formObject.password) {
      API.saveUser({
        username: formObject.username,
        email: formObject.email,
        password: formObject.password,
        // avatar: imagelink,
      }).then((res) => {
        // console.log(res)
        // console.log(imagelink)
        if (res.status === 200) {
          M.toast({ html: 'Success!' })
          API.loginUser({
            username: formObject.username,
            password: formObject.password
          }).then((res) => {
            console.log(res.data.token)
            setUserData({
              token: res.data.token,
              user: res.data.user
            })
            localStorage.setItem("auth-token", res.data.token)
            history.push("/splash")
          })
        console.log(res)
        }
      }).catch((res) => {
        console.log(res)
        return M.toast({ html: 'This email or username already belongs to a memeber!' })
      })
    }
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
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
              {/* <h2>Welcome{}</h2> */}
              {/* <img id="pyramid" alt="" src={pyramid}/> */}
              <br />
              {/* <h2>Welcome to Le LouVr3D</h2> */}
              {userData.user ? (
                <div>
                  <h2>{userData.user.username}, you are already logged in.</h2>
                  <Sidenav
                    userData={userData} />
                </div>
              ) : (
                  <>
                    <h2>Sign Up Form</h2>
                    <form className="signup">
                      <div className="form-group">
                        <input
                          // type="username"  
                          className="form-control"
                          id="username-input"
                          placeholder="Username (required)"
                          onChange={handleInputChange}
                          name="username" />
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email-input"
                          placeholder="Email (required)"
                          onChange={handleInputChange}
                          name="email" />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="password-input"
                          placeholder="Password (required)"
                          onChange={handleInputChange}
                          name="password" />
                      </div>
                      
                      
                      <button type="submit" className="btn btn-default"
                        disabled={!(formObject.username || formObject.email || formObject.password)}
                        onClick={handleFormSubmit}
                      >Sign Up</button>
                    </form>
                    <br />
                    {/* <Modal/> */}
                    <p  >Or log in <a href="/login">here</a></p>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>



  )
}

export default Signup;