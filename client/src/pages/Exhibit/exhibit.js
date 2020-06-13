import React, { useState, useContext } from "react";
import pyramid from "../../components/images/pyramid.jpg"
import API from "../../utils/API";
import { SearchButton, Input } from "../../components/SearchBar/SearchBar";
import { List, ListItem } from "../../components/List"
import DeleteBtn from "../../components/DeleteBtn/index";
import { useParams, useHistory } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import M from "materialize-css";
import './exhibit.css'
import UserContext from "../../content/UserContext";
import Sidenav from "../../components/SideNav/sidenavAlt";


const Exhibit = () => {
  const { userData, setUserData } = useContext(UserContext);
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
        { console.log(res) }
        if (res.data.objectIDs === null) {
          throw new Error(res.status)
        }
        let searchResults = res.data.objectIDs
        setExhibits({ IDs: searchResults, error: "" });
        searchResults = searchResults.slice(0, 10);
        const searchResultsPromises = searchResults.map((ID) => loadImages(ID));
        return Promise.all(searchResultsPromises);
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
            image: art.primaryImageSmall
          }
          return art
        })
        { console.log(displayResults) }
        setExhibits({
          results: displayResults
        });
      })
      .catch((data) => {
        console.log(data)
        return M.toast({ html: 'Error! Please enter a valid search term.' })
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
      .catch(err => console.log(err))
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

  const history = useHistory();

  const handleFavorites = () => {
    history.push("/favorites")
  }

  const handleSplash = () => {
    history.push("/splash")
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
      image: savedImage.image,
      // userID: userData.user.id
    })

  }

  let displayArt = exhibits.results;
  return (
    <div>
      {console.log(userData)}
      <div className="container">
      <Sidenav
              userData={userData}
              className="right-align"
              />
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="exhibitheader">Discover Le LouVr3D</h2>
            <div className="row">
              <img
                alt=""
                src={pyramid}
              //  onClick={}
              />
            </div>
            <button type="submit" className="btn btn-default" href="/favorites"
              onClick={handleFavorites}> View Favorites</button>

            {/* <button className="btn btn-default"
            >My Profile</button> */}

            <button type="submit" className="btn btn-default" href="/splash"
              onClick={handleSplash}>Le LouVr3D Exhibit</button>

            <form>
              <Input
                name="search"
                onChange={handleInputChange}
              />
              <SearchButton
                onClick={handleFormSubmit}
              />
            </form>
            
            {displayArt ? (
            <div className="col">

              {displayArt.map(exhibit => (
                <div className="col s12 m6 ">
                <div className="card">

                  <div className="card-image">
                    <img alt="" src={exhibit.image} />
                    <DeleteBtn onClick={() => addArt(exhibit.key)} className="secondary-content" />
                  </div>

                  <div className="card-content">
                    <span> <h5>{exhibit.title} by {exhibit.artist ? (exhibit.artist) : ("Artist Unknown")}</h5></span>
                  </div>

                  <div className="card-action">
                    <a href={exhibit.image}>View Image on the Met yo!</a>
                        
                  </div>

                </div>
                </div>
              ))}
            </div>

          ) : (

              <div>
                 <h5 className="white-text">Search through collections of art for images you would like to favorite.</h5>
                      <p className="white-text">
                        Powered by The Metropolitan Museum of Art Collection API.
                </p>
              </div>
            )}
            

          </div>
        </div>
      </div>
    </div>
  )
}
export default Exhibit;


