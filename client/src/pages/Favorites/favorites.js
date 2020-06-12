import React, { useState, useEffect, useContext } from "react";
import pyramid from "../../components/images/pyramid.jpg"
import API from "../../utils/API";
import UserContext from "../../content/UserContext";
const Favorite = () => {
  const {userData, setUserData} = useContext(UserContext);
  const [favorites, setFavorites] = useState([])
  useEffect(() => {
    // setTimeout(getFavorites(), 5000)
    getFavorites()
  }, [])
  function getFavorites() {
    console.log("hey")
    // let id = userData.user.id
    API.loadAllFavorites()
    .then(res => 
      {console.log(res)
       setFavorites(res.data)}
     )
     .catch(err => {
       console.log(err)});
     };
     console.log(favorites)
    return (
        <div>
          <div className="container ">
           <div className="row">
         <div className="col-md-6 col-md-offset-3">
         <h2>My Favorites</h2>
          </div>
          {favorites ? (
          <div class="col s12 m7 ">
            {console.log(favorites)}
            {favorites.map(favorite =>  (
      <div class="card ">
        <div class="card-image ">
          <img alt="" src={favorite.image}/>
          
        </div>
        <div class="card-content">
         <span> <h5>{favorite.title} by {favorite.artist ? (favorite.artist) : ("Artist Unknown")}</h5></span>
        </div>
        <div class="card-action">
          <a href={favorite.image}>View Image on the Met yo!</a>
        </div>
      </div>
      ))}
    </div>
          ) : (
        <div>
          <h3>Nothing to display</h3>
        </div>
      )}
      </div>
      </div>
      </div>
      )
    }
export default Favorite;