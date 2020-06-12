import React, { useState } from "react";
import pyramid from "../../components/images/pyramid.jpg"
import API from "../../utils/API";
import { SearchButton, Input } from "../../components/SearchBar/SearchBar";
import { List, ListItem } from "../../components/List"
import DeleteBtn from "../../components/DeleteBtn/index";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import M from "materialize-css";

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
            image: art.primaryImage
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

  let displayArt = exhibits.results;
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
            <button className="btn btn-default">Favorites</button>
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
              {/* <Col size="md-6 sm-12"> */}
              {displayArt ? (
                <div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3">
                        <h2>Search Results</h2>
                      </div>
                      {/* <List> */}
                      {console.log(exhibits)}
                      {displayArt.map(exhibit => (
                        <div className="col s12">
                          <div className="card" key={exhibit.key}>
                            <div className="card-image">
                              <img alt={exhibit.title} src={exhibit.image} />
                              <span className="card-title">{exhibit.title}</span>
                            </div>
                            <div className="card-content">
                              <p>  by {exhibit.artist ? (exhibit.artist) : ("Artist Unknown")}</p>
                            </div>
                            <div className="card-action">
                              <a onClick={() => addArt(exhibit.key)}>Save</a>
                              {/* <DeleteBtn onClick={() => addArt(exhibit.key)} /> */}
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* </List> */}

                    </div>
                  </div>
                </div>
              ) : (
                  <h1></h1>
                )}

              {/* </Col> */}
            </Row>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Exhibit;