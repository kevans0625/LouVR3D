import React, { useState, useContext } from "react";
import pyramid from "../../components/images/pyramid.jpg"
import API from "../../utils/API"
import UserContext from "../../content/UserContext";
import $ from "jquery"
import Axios from "axios"
import { json } from "body-parser";

const Avatar = () => {
    const { userData, setUserData } = useContext(UserContext);


    console.log(userData)

    const addAvatar = (image) => {
        console.log(image)
    //    var string = json.toString(image)
  var id = { _id: userData.user.id };
  var newImage = {$set: {avatar: image} };

  
        return API.modifyUser(
             userData.user.id,
             {avatar: image}
         )
            .then(res => {

               console.log(res)
            })
    }
   
    const handleFormSubmit = event => {
        event.preventDefault();
        // loadExhibits(formObject.search)
        var ele = document.getElementsByTagName('input'); 
        console.log(ele.checked)
        if ($('input[name=avatarCheck]:checked').length > 0) {
            // do something here
           let z = $('input[name="avatarCheck"]:checked').val();
          addAvatar(z)
        }

    }


  
    return (
        <div>
            {console.log(userData)}
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-6 col-md-offset-3"> */}
                    <h2 className="">Select A Patronage</h2>

                    <p>Be sure to hit save to submit the change</p>


                    <div>
                        <form action="#">
                            <p className="col m6">
                                <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes1" />
                                <label>

                                    <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes1" />
                                    <span>Gogh</span>
                                </label>
                            </p>
                            <p className="col m6">
                                <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes2" />
                                <label>
                                    <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes2" />
                                    <span>Bourgeois</span>
                                </label>
                            </p>
                            <p className="col m6">
                                <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes3" />
                                <label>
                                    <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes3" />
                                    <span>Vinci</span>
                                </label>
                            </p>
                            <p className="col m6">
                                <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes4" />
                                <label>
                                    <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes4" />
                                    <span>Basquiat</span>
                                </label>
                            </p>

                            <p className="col m6">
                                <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes5" />
                                <label>
                                    <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes" />
                                    <span>Monet</span>
                                </label>
                            </p>
                            <p className="col m6">
                                <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes6" />
                                <label>
                                    <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes6" />
                                    <span>Jules</span>
                                </label>
                            </p>
                            <p className="col m6">
                                <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes7" />
                                <label>
                                    <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes7" />
                                    <span>Michelangelo</span>
                                </label>
                            </p>
                            <p className="col m6">
                                <img className="circle profile-avatar" src="https://api.adorable.io/avatars/face/eyes8" />
                                <label>
                                    <input type="radio" name="avatarCheck" value="https://api.adorable.io/avatars/face/eyes8" />
                                    <span>Frida</span>
                                </label>
                            </p>
                            <button type="submit" className="btn btn-default"
                             onClick={handleFormSubmit}
                            >Save</button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
        // </div>
    )
}
export default Avatar;
