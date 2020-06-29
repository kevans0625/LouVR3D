import React, { useState, useEffect, useContext } from "react";
// import pyramid from "../../components/images/pyramid.jpg"
import API from "../../utils/API";
import UserContext from "../../content/UserContext";
import { useHistory } from "react-router-dom";
import Sidenav from "../../components/SideNav/sidenavAlt";
import pyramid from "../../components/images/pyramid.jpg"



const Favorite = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [favorites, setFavorites] = useState([])
  console.log(userData)
  useEffect(() => {
    // setTimeout(getFavorites(), 5000)
    // getFavorites()
  }, [])
  function getFavorites() {
    console.log(userData.user.id)
    let id = userData.user.id
    API.loadFavorites(id)
      .then(res => {
        console.log(res.data)
        setFavorites(res.data)
      }
      )
      .catch(err => {
        console.log(err)
        console.log(userData)
      });
  };
  console.log(favorites);

  const history = useHistory();

  function deleteFavorite(id) {
    {console.log(id)}
    API.deleteFavorite(id)
    .then(res => getFavorites())
    .catch(err => console.log(err));
  }

  const handleExhibit = () => {
    history.push("/search")
  }

  const handle3D = () => {
    history.push("/view")
  }
  return (
    <div>
      <div className="container ">

        <div className="row">

          <div className="col-md-6 col-md-3">
          <Sidenav
              userData={userData}
              />
                  <div className="col m1">
        <img
          alt=""
          src={pyramid}
        className="pyramid"
        />
          </div>
          <div className="col m10">
            
            <h2 className="exhibitheader">My Favorites</h2>
        </div>
               {/* <h2 className="white-text">My Favorites</h2> */}
            <button type="submit" className="btn btn-default" href="/search"
              onClick={handleExhibit}>Add More To Your Favorites </button>
              
            <button type="submit" className="btn btn-default" onClick={getFavorites}>View Favorites in 2D</button>
            <button type="submit" className="btn btn-default" href="/view" onClick={handle3D}>View Favorites in 3D</button>
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
                    <button type="submit" className="btn btn-default" onClick={() => deleteFavorite(favorite._id)}>Delete</button>
                    {console.log(favorites)}
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