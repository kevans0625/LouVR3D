import React, {useState, useEffect,useContext} from "react";
import {useHistory} from "react-router-dom"
import API from "../../utils/API";
import M from "materialize-css"
import UserContext from "../../content/UserContext";
import Modal from "../Signup/modal"
import Sidenav from "../../components/SideNav/sidenav";

const Login = () => {
    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState({
      username: "",
      password: "",
      error: ""
    })
  
    useEffect(() => {
      API.getUsers()
      .then(res =>
      { 
      setUsers(res.data)}
      ).catch(err => console.log(err))
    }, [])
   
    const {userData, setUserData} = useContext(UserContext);

    const history = useHistory()
  
  const handleInputChange = event => {
     const {name, value} = event.target
     setFormObject({...formObject, [name]: value})
    };
    
    const handleFormSubmit = event => {
      event.preventDefault();
      if(formObject.username && formObject.password){
        API.loginUser({
          username: formObject.username,
          password: formObject.password
        }).then((res) =>{
          console.log(res) 
          if (res.status === 200){
             M.toast({html: 'Success!'})
             console.log(res.data.token)
             setUserData({
               token: res.data.token,
               user: res.data.user
             })
             localStorage.setItem("auth-token", res.data.token)
             history.push("/splash")
            
          }}).catch((res) => {
            console.log(res)
            return  M.toast({html: 'Invalid credentials!'})
        })
      }  
        // window.location.replace("/splash");
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
     

      {userData.user ? (
        
        <div className="col s12">
        <h2>{userData.user.username}, you are already logged in.</h2>
               <Sidenav
              userData={userData}
              />
            <button type="submit" className="btn btn-default" href="/login"
              onClick={handleLogout}>Logout</button>
              </div>

            ):(
              <>
          <h2>Login to Le LouVr3D</h2>

                <form className="signup">
      <div className="form-group">
          <input 
          // type="username"  
          className="form-control" 
          id="username-login-input"
          placeholder="Username (required)" 
          onChange={handleInputChange}
          name="username"/>
        </div>
        <div className="form-group">
          <input 
          type="password" 
          className="form-control" 
          id="password-login-input" 
          placeholder="Password (required)" 
          onChange={handleInputChange}
          name="password"/>
        </div>
        <button type="submit" className="btn btn-default"
             disabled={!(formObject.username || formObject.password)}
             onClick={handleFormSubmit}
             >Login
        </button>
      </form>
      <br/>
      <Modal/>
              </>
            )}
     { console.log(userData)}
      {/* <p>Sign Up <a href="/signup">here</a></p> */}
    </div>
    </div>
    </div>
    </div>
    )
}

export default Login;