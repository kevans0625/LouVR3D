import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import M from "materialize-css"
import Modal from "../Signup/modal";

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
            return  M.toast({html: 'Success!'})
          }
            return  M.toast({html: 'Invalid credentials!'})

        })
        // , ( M.toast
      //       ({
      //       html: 'Success!'
      //       })))
      //   .catch(err =>{
      //   M.toast({html: `${err}`}) 
      //   console.log(err.message)});
      }  
        // window.location.replace("/profile");
    }
  


    return (
        <div>
        <div className="container">
         <div className="row">
       <div className="col-md-6 col-md-offset-3">
      <h2>Welcome to Le LouVr3D</h2>
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
      {/* <p>Sign Up <a href="/signup">here</a></p> */}
    </div>
    </div>
    </div>
    </div>
    )
}

export default Login;