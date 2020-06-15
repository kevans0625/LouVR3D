import React, { useState, useEffect, useContext } from "react";
// import pyramid from "../../components/images/pyramid.jpg"
import API from "../../utils/API";
import UserContext from "../../content/UserContext";
import { useHistory } from "react-router-dom";
import Sidenav from "../../components/SideNav/sidenavAlt";



const Favorite = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    // setTimeout(getFavorites(), 5000)
    getFavorites()
  }, [])
  function getFavorites() {
    console.log("hey")
    // let id = userData.user.id
    API.loadAllFavorites()
      .then(res => {
        console.log(res)
        setFavorites(res.data)
      }
      )
      .catch(err => {
        console.log(err)
      });
  };
  console.log(favorites);

  const history = useHistory();

  const handleExhibit = () => {
    history.push("/exhibit")
  }

  return (
    <div>
      <div className="container ">

        <div className="row">

          <div className="col-md-6 col-md-3">
          <Sidenav
              userData={userData}
              />
               <h2 className="white-text">My Favorites</h2>
            <button type="submit" className="btn btn-default" href="/exhibit"
              onClick={handleExhibit}>Add More To Your Favorites </button>
          </div>

          {favorites ? (
            <div className="col">
              {console.log(favorites)}
              {favorites.map(favorite => (
                <div className="col s12 m6 ">
                <div className="card">

                  <div className="card-image">
                    <img alt="" src={favorite.image} />
                  </div>

                  <div className="card-content">
                    <span> <h5>{favorite.title} by {favorite.artist ? (favorite.artist) : ("Artist Unknown")}</h5></span>
                  </div>

                  <div className="card-action">
                    <a href={favorite.image}>View Image on the Met yo!</a>
                  </div>

                </div>
                </div>
              ))}
            </div>

          ) : (

              <div>
                <h3 className="white-text">Nothing to display</h3>
              </div>
            )}
            
        </div>
      </div>
    </div>
  )
}
export default Favorite;