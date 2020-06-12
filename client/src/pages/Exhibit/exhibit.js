import React, { useState, useContext } from "react";
import pyramid from "../../components/images/pyramid.jpg"
import API from "../../utils/API";
import { SearchButton, Input } from "../../components/SearchBar/SearchBar";
import {List, ListItem} from "../../components/List"
import DeleteBtn from "../../components/DeleteBtn/index";
import { useParams} from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import './exhibit.css'
import UserContext from "../../content/UserContext";


const Exhibit = () => {
  const {userData, setUserData} = useContext(UserContext);


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
        // { console.log(res) 
        if (res.data === "error") {
          throw new Error(res.status);
        }
      // }
        let searchResults = res.data.objectIDs
        setExhibits({ IDs: searchResults, error: "" });
        searchResults = searchResults.slice(0, 10);
        const searchResultsPromises = searchResults.map((ID) => loadImages(ID));
        return Promise.all(searchResultsPromises)
      })
      .then((data) => {
        console.log(data);
        let displayResults = data.map(art => {
           art = 
           {
            key: art.objectID, 
            artist: art.artistDisplayName, 
            title: art.title, 
            department: art.department,
            image: art.primaryImage
          }
          return art
        })
        // {console.log(displayResults)}
        
        setExhibits({
          results: displayResults
        });
      })

  }
  // new api get images
  // load exhibits send response to load images
  // load image generates images
  // form submit loadimages 
  const loadImages = (id) => {
    return API.getMetImages(id)
      .then(res => {
        if (res.data === "error") { throw new Error(res.status) }
        return res.data
      })
  }
  const handleInputChange = event => {
    const { name, value } = event.target
    setFormObject({ ...formObject, [name]: value })
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

  let { id } = useParams()

  const addArt = (key) => {
    
    console.log(exhibits.results.find(result => result.key === key))
    const savedImage = exhibits.results.find(result => result.key === key)
    console.log(savedImage)
      API.saveImage({
        title: savedImage.title,
        artist: savedImage.artist,
        department: savedImage.department,
        image: savedImage.image
      })

      .then(console.log(savedImage.title + " Saved to database"))
  }

//   let displayArt = exhibits.results;
//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 col-md-offset-3">
//             <h2>Welcome to Le LouVR3D Exhibit</h2>
//             <div className="row">
//               <img className="circle"
//                 alt=""
//                 src={pyramid}
//               //  onClick={}
//               />
//             </div>
//             <form>
//               <Input
//                 name="search"
//                 onChange={handleInputChange}
//               />
//               <SearchButton
//                 onClick={handleFormSubmit}
//               />
//             </form>
//             <Row >
//               <Col size="md-6 sm-12">
//               {displayArt ? (
//                 <List>
//                   {console.log(exhibits)}
//                 {displayArt.map(exhibit => (
//                   <ListItem key={displayArt.key}>
                    
//                     {exhibit.title} by {exhibit.artist ? (exhibit.artist) : ("Artist Unknown")}
//                     <Col size="md-6 sm-12">
//                     <img src={exhibit.image} style={{width: "100px"}} />
//                     <DeleteBtn onClick={() => addArt(exhibit.key)} />
//                     </Col>
//                   </ListItem>
                  
//                 ))}
//                 </List>
//               ) : (
//                 <h1>Search for something!</h1>
//               )}
//               </Col>
//             </Row>
//             <button className="btn btn-default" href="/favorites">Favorites</button>
//             <br />
//             <button href="/logout" className="btn btn-default"
//             //  disabled={!(formObject.username || formObject.email || formObject.password)}
//             //  onClick={handleFormSubmit}
//             >My Profile</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Exhibit;
let displayArt = exhibits.results;
  return (
    <div>
      {console.log(userData)}
      <div className="container">
        <div className="row">
        <div className="col-md-6 col-md-offset-3">
            <h2 className="exhibitheader">Welcome to Le LouVr3D Exhibit</h2>
            <div className="row">
              <img className="circle"
                alt=""
                src={pyramid}
              //  onClick={}
              />
            </div>
            <button className="btn btn-default"> View Favorites</button>
            <button className="btn btn-default"
            >My Profile</button>
             <button className="btn btn-default"
            >Le LouVr3D Exhibit</button>
            <form>
              <Input
                name="search"
                onChange={handleInputChange}
              />
              <SearchButton
                onClick={handleFormSubmit}
              />
            </form>
            <Row >
              <Col size="md-6 sm-12">
              {displayArt ? (
                <ul className="collection">
                  {console.log(exhibits)}
                {displayArt.map(exhibit => (
                  <li key={exhibit.key} className="collection-item avatar">
                    {/* <Col size="md-6 sm-12"> */}
      
                  <img src={exhibit.image} alt={exhibit.title}  className="circle img-fav"/>
                    {/* <img src="images/yuna.jpg" alt="" className="circle"/> */}
                    <span className="title">{exhibit.title} </span>
                    <p>
                  {/* {exhibit.title} <br></br> */}
                  by {exhibit.artist ? (exhibit.artist) : ("Artist Unknown")}
                    </p>
                  <DeleteBtn onClick={() => addArt(exhibit.key)} className="secondary-content"/>
                    {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
                    {/* </Col> */}
                  </li>
                ))}
                </ul>
              ) : (
                <>
                <h5>Search through collections of art for images you would like to favorite.</h5>
                <p>

                  Powered by The Metropolitan Museum of Art Collection API.
                </p>
                </>
              )}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Exhibit;
