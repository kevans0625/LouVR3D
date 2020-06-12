import React, {Component}from "react";
import ImageUploader from 'react-images-upload';
import API from "../../utils/API";
import './splash.css';


class ImageUpload extends Component {

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
         data.append("image", image);
         console.log(image);
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
        <h2 className="profileheader">Image Uploader</h2>
      <div className="row">
                  
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

      </div>
      </div>
      </div>
      </div>
      </div>
    );
}
}
export default ImageUpload;