import React, {useState, useEffect,useContext} from "react";
import {useHistory} from "react-router-dom"
import API from "../../utils/API";
import M from "materialize-css"
import UserContext from "../../content/UserContext";
import pyramid from "../../components/images/pyramid.jpg"
import Landing from "../Splash/splash"
import $ from "jquery"

const Signup = () => {
  const [users, setUsers] = useState([])
  const [formObject, setFormObject] = useState({
    username: "",
    email: "",
    password: "",
    error: ""
  })
  const {userData,setUserData} = useContext(UserContext);
  useEffect(() => {
    API.getUsers()
    .then(res =>
    { 
    setUsers(res.data)}
    ).catch(err => console.log(err))
  }, [])
 
  const history = useHistory()

const handleInputChange = event => {
   const {name, value} = event.target
   setFormObject({...formObject, [name]: value})
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    var ele = document.getElementsByTagName('input'); 
    console.log(ele.checked)
    ``
    if(formObject.username && formObject.email && formObject.password){
      API.saveUser({
        username: formObject.username,
        email: formObject.email,
        password: formObject.password,
        // avatar: z
      })
      // .then((res) =>{
      //   console.log(res) 
        // if (res.status === 200){
        //  M.toast({html: 'Success!'})
        //   API.loginUser({
        //     username: formObject.username,
        //     password: formObject.password
        //   }).then((res)=>{
        //     console.log(res.data.token)
        //     setUserData({
        //       token: res.data.token,
        //       user: res.data.user
        //     })
        //     localStorage.setItem("auth-token", res.data.token)
        //     // history.push("/splash")
        //   })
        }  

    //     }).catch((res) => {
    //       console.log(res)

    //       return  M.toast({html: 'This email or username already belongs to a memeber!'})
        
    //   })

    // }
  }
  const handleLogout = () => {
    setUserData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem("auth-token", "")
   //   window.location.replace("/signup");
   }

   const handleAvatarSubmit = event => {
    event.preventDefault();
    // loadExhibits(formObject.search)
    var ele = document.getElementsByTagName('input'); 
    console.log(ele.checked)
    if ($('input[name=avatarCheck]:checked').length > 0) {
        // do something here
       let z = $('input[name="avatarCheck"]:checked').val();
      console.log(z)

    }

}
    return (
        <div>
          <div className="container">
           <div className="row">
         <div className="col-md-6 col-md-offset-3">

         <div className="margin-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            {/* <h2>Welcome{}</h2> */}
            <img id="pyramid" alt="" src={pyramid} />
            <br />
            {/* <h2>Welcome to Le LouVr3D</h2> */}

            {userData.user ? (

          <Landing/>

            ):(
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
            name="username"/>
          </div>
       
          <div className="form-group">
            <input 
            type="email" 
            className="form-control" 
            id="email-input" 
            placeholder="Email (required)" 
            onChange={handleInputChange}
            name="email"/>
          </div>
     
          <div className="form-group">
            <input 
            type="password" 
            className="form-control" 
            id="password-input" 
            placeholder="Password (required)" 
            onChange={handleInputChange}
            name="password"/>
          </div>
          <h2 className="">Select A Patronage</h2>

<p>Be sure to hit save to submit the change</p>


{/* <div>
    <form action="#"> */}
        <p className="col s6 m3">
            <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes1" />
            <label>

                <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes1" />
                <span>Gogh</span>
            </label>
        </p>
        <p className="col s6 m3">
            <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes2" />
            <label>
                <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes2" />
                <span>Bourgeois</span>
            </label>
        </p>
        <p className="col s6 m3">
            <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes3" />
            <label>
                <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes3" />
                <span>Vinci</span>
            </label>
        </p>
        <p className="col s6 m3">
            <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes4" />
            <label>
                <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes4" />
                <span>Basquiat</span>
            </label>
        </p>

        <p className="col s6 m3">
            <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes5" />
            <label>
                <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes" />
                <span>Monet</span>
            </label>
        </p>
        <p className="col s6 m3">
            <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes6" />
            <label>
                <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes6" />
                <span>Jules</span>
            </label>
        </p>
        <p className="col s6 m3">
            <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes7" />
            <label>
                <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes7" />
                <span>Michelangelo</span>
            </label>
        </p>
        <p className="col s6 m3">
            <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes8" />
            <label>
                <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes8" />
                <span>Frida</span>
            </label>
        </p>
     
          <button type="submit" className="btn btn-default"
               disabled={!(formObject.username || formObject.email || formObject.password)}
               onClick={handleFormSubmit}
               >Sign Up</button>
        </form>
        <br />
        {/* <Modal/> */}
        <p>Or log in <a href="/login">here</a></p>
              </>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>






     
      </div>
      </div>
      </div>
   
    )
}

export default Signup;