import React from "react";
import pyramid from "../../components/images/pyramid.jpg"


const Card = () => {

    return (
        <div>
          <div className="container">
           <div className="row">
         <div className="col-md-6 col-md-offset-3">
         <h2>My Cards</h2>
          </div>

          <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img    alt="" src={pyramid}/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="/">This is a link</a>
        </div>
      </div>
    </div>
      </div>
      </div>
      </div>
     
   
    )
}

export default Card ;