import React from "react";
import pyramid from "../image/pyramid.jpg"



const Home = () => {


    return (
        <div>
          <div className="container">
           <div className="row">
         <div className="col-md-6 col-md-offset-3">
        <h2>Welcome{}</h2>
        <img src={pyramid}/>
        <br />
        <h2>Le LouVR3D{}</h2>
        <button href="/login">Login</button>
        <button href="/signup">Sign Up</button>
      </div>
      </div>
      </div>
      </div>
   
    )
}

export default Home;