import React, { useState, useEffect } from "react"
import Exhibit from "../../components/Exhibit/deptIndex"
import API from "../../utils/API"
// import Departments from "./departments.js";
import './dept.css'

function DepartmentSearch({history, location}) {
    const [exhibits, setExhibits] = useState([])
  const [formObject, setFormObject] = useState({
    search: "",
    results: [],
    IDs: [],
    error: ""
  })

    console.log(location.state.id)
    useEffect(() => {
        API.getDepartments(location.state.id)
            .then(res => {
        { console.log(res) }
        if (res.data.objectIDs === null) {
          throw new Error(res.status)
        }
        let searchResults = res.data.objectIDs
        setExhibits({ IDs: searchResults, error: "" });
        searchResults = searchResults.slice(20, 30);
        const searchResultsPromises = searchResults.map((ID) => loadImages(ID));
        return Promise.all(searchResultsPromises);
      })
      .then((data) => {
        console.log(data);
        let displayResults = data.map(art => {
          art =
          {
            _id: art.objectID,
            title: art.title,
            department: art.department,
            key: art.objectID,
            image: art.primaryImage
          }
          return art
        })
        { console.log(displayResults) }
        setExhibits({
          results: displayResults
        });
      })
            .catch(err => {
                if (err) {
                    console.log(err)
                };
            })
    }, [])

    const loadImages = (id) => {
        return API.getMetImages(id)
          .then(res => {
            { console.log(res) }
            if (res.data === "error") { throw new Error(res.status) }
            return res.data
          })
          .catch(err => console.log(err))
      }

      console.log(exhibits.results)
let  art = exhibits.results
    return (
        <div>
            {console.log(art)}
            { art ? (<Exhibit departments={art} environment="egypt" />) : (<div />)}
            <div className="row" id="info">
                <div className="col ">
        
<p className="white-text">Tap a box to learn more. </p>
                        </div>
                        <div className="row" id="info">
                {/* <div className="col s12 m7"> */}
                <div className="card">

<div className="card-image">
  <img id="displayImage"/>
</div>

{/* <div className="card-content hidden" id="remove"> */}
  <span> <h5 className="card-title " id="title"></h5></span>
{/* </div> */}


</div>
                </div>
            </div>
       
                    </div>
                // </div>
            
    )
}

export default DepartmentSearch