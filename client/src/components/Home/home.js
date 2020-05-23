import React from "react";
import pyramid from "../image/pyramid.jpg"
// import M from "materialize-css"


const Home = () => {


    return (
        <div>
          <div className="container">
           <div className="row">
         <div className="col-md-6 col-md-offset-3">
        <h2>Welcome{}</h2>
        <img    alt="" src={pyramid}/>
        <br />
        <h2>Le LouVR3D{}</h2>
        <button type="submit" className="btn btn-default" href="/login">Login</button>
        <button type="submit" className="btn btn-default" href="/signup">Sign Up</button>
      </div>
      </div>
      </div>
      </div>
   
    )
}

export default Home;