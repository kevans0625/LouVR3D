import React, {Component}from "react";
import avatar from "../image/Missing_avatar.png"
import ImageUploader from 'react-images-upload';
import API from "../utils/API";

class Profile extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
         this.uploadImages = this.uploadImages.bind(this);
    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
      }
      uploadImages(){
        console.log(this.state.pictures)
        let uploadPromises = this.state.pictures.map(image => {
          let data = new FormData();
        //   for (var value of FormData.values()) {
        //     console.log(value); 
        //  }         
         data.append("image", image);
        //  data.append("name", image.type);
         console.log(image);
        //  data.append("name", image.name);
         console.log(data.values())
         return API.imageUpload(data)
           })
           API.allImages(uploadPromises)
           .then(results =>{
             console.log(results);
            }).catch(e =>{
              console.log(e)
           })
      }
render() {
    return (
        <div>
          <div className="container">
           <div className="row">
         <div className="col-md-6 col-md-offset-3">
        <h2>Welcome USER_NAME</h2>
        <div className="row">
        <img className="circle" 
        alt= ""
        src={avatar}
        //  onClick={}
      />
      </div>
 <div className="row">
                    <span >
                            <p ><i className="social-i fas fa-map-marker-alt"></i> Name</p>
                           <br/><p><i className="social-i fas fa-envelope-open-text"></i> Email: </p>
                           <br/><p><i className="social-i fas fa-unlock-alt"></i> Password:</p>
                        </span>
                </div>
        <button className="btn btn-default" href="/favorites">Favorites</button>
        <button  className="btn btn-default" href="/exhibit">Le LouVR3D exhibit </button>
        <ImageUploader
                withIcon={true}
                withPreview={true}
                buttonText='Select Image(s)'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png']}
                maxFileSize={5242880}
            />
          <button type="submit" className="btn btn-default"
              //  disabled={!(formObject.username || formObject.email || formObject.password)}
               onClick={this.uploadImages}
               >Upload</button>
        {/* </form> */}
        <br />
        <button  href="/logout" className="btn btn-default"
              //  disabled={!(formObject.username || formObject.email || formObject.password)}
              //  onClick={handleFormSubmit}
               >Logout</button>
      </div>
      </div>
      </div>
      </div>
    );
}
}
export default Profile;