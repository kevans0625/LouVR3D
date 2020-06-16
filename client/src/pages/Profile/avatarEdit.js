import React, { useState, useContext } from "react";
// import pyramid from "../../components/images/pyramid.jpg"
import { useHistory } from "react-router-dom"
import API from "../../utils/API"
import UserContext from "../../content/UserContext";
import $ from "jquery"
// import Axios from "axios"
// import { json } from "body-parser";
import M from "materialize-css"

const Avatar = () => {

    const { userData, setUserData } = useContext(UserContext);
    console.log(userData)
    const [formObject, setFormObject] = useState({
        // username: "",
        bio: "",
        age: "",
        tagline: "",
        error: ""
    })
    const history = useHistory();

    const addAvatar = (image) => {
        console.log(image)
        var id = userData.user.id;
        var newData = { avatar: image };
        API.modifyUser(id, newData)
            .then(res => { console.log(res) })
        history.go()
    }
    const handleInputChange = event => {
        const { name, value } = event.target
        setFormObject({ ...formObject, [name]: value })

    };

    const handleFormSubmit = event => {
        event.preventDefault();
        if ($('input[name=avatarCheck]:checked').length > 0) {
            let imagelink = $('input[name="avatarCheck"]:checked').val();
            // addAvatar(imagelink)
            // return imagelink

            let id = userData.user.id;
            let newData = {
                bio: formObject.bio,
                age: formObject.age,
                tagline: formObject.tagline,
                avatar: imagelink
            };
            API.modifyUser(id, newData)
                .then((res) => {
                    console.log(res)
                    if (res.status === 200) {
                        M.toast({ html: 'Success!' })
                        history.go()
                    }
                })
        }
    }


    return (
        <div>
            {console.log(userData)}
            <div className="container">
                <div className="row">

                    <h4 className="">Update Patronage Profile</h4>
                    <p>Be sure to hit save to submit the change</p>
                    <div>
                        <form action="#">
                            <div className="form-group">
                                <input
                                    // type="username"  
                                    className="form-control"
                                    id="bio-input"
                                    placeholder="Bio (required)"
                                    onChange={handleInputChange}
                                    name="bio" />
                            </div>
                            <div className="form-group">
                                <input
                                    // type="username"  
                                    className="form-control"
                                    id="tagline-input"
                                    placeholder="Tagline (required)"
                                    onChange={handleInputChange}
                                    name="tagline" />
                            </div>
                            <div className="form-group">
                                <input
                                    // type="username"  
                                    className="form-control"
                                    id="age-input"
                                    placeholder="Age (required)"
                                    onChange={handleInputChange}
                                    name="age" />
                            </div>

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
                                    <span>Bourge</span>
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
                                    <span>Michel</span>
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
