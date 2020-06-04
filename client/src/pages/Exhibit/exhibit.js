import React, { useState } from "react";
import pyramid from "../../components/images/pyramid.jpg"
import API from "../../utils/API";
import { SearchButton, Input} from "../../components/SearchBar/SearchBar"


const Exhibit = () => {
  const [exhibits, setExhibits] = useState([])
  const [formObject, setFormObject] = useState({
    search: "",
    results: [],
    IDs: [],
    error: ""
  })

  const loadExhibits = (exhibit) => {
    API.getMet(exhibit)
    .then(res => {
      {console.log(res)}
      if (res.data === "error") {
        throw new Error(res.status); 
      } else {
        let results = res.data.objectIDs
        results = results.map(ID => {
          // result 
          // = {
          //   key: result.id,
          //   id: result.id,
          // }
          // console.log(ID)
          loadImages(ID);
        })
        setExhibits({IDs: results, error: ""})
      }
    })
  }
// new api get images
// load exhibits send response to load images
// load image generates images
// form submit loadimages 

  const loadImages = (id) => {
    // console.log(id )
    let imageArr = []
    API.getMetImages(id)
    .then(res => {
      console.log(res)
      if (res.data === "error") {
        throw new Error(res.status); 
      } else {
        let image = res.data.primaryImage
        
        imageArr.push(image)
        console.log(imageArr)
      }
    })
    
  }

  const handleInputChange = event => {
    const {name, value} = event.target
    setFormObject({...formObject, [name]: value})
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // API.saveImage({
    //   title: formObject.data.title,
    //   description: formObject.data.description,
    //   image: formObject.data.primaryImage
    // })
    loadExhibits(formObject.search)
  }

    return (
        <div>
          <div className="container">
           <div className="row">
         <div className="col-md-6 col-md-offset-3">
         <h2>Welcome to Le LouVR3D Exhibit</h2>
        
        
        
        <div className="row">
        <img className="circle" 
        alt=""
        src={pyramid}
        //  onClick={}
      />
      </div>
      <form>
        <Input
          name="search"
          onChange={handleInputChange}
        />
        <SearchButton
        onClick={handleFormSubmit}
        />
      </form>
      

        <button className="btn btn-default" href="/favorites">Favorites</button>
      
        <br />
        <button  href="/logout" className="btn btn-default"
              //  disabled={!(formObject.username || formObject.email || formObject.password)}
              //  onClick={handleFormSubmit}
               >My Profile</button>
      </div>
      </div>
      </div>
      </div>
   
    )
}

export default Exhibit;