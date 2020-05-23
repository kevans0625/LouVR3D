import React from "react";
import pyramid from "../image/pyramid.jpg"


const Profile = () => {



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



        <button className="btn btn-default" href="/favorites">Favorites</button>
      
        <br />
        <button  href="/logout" className="btn btn-default"
              //  disabled={!(formObject.username || formObject.email || formObject.password)}
              //  onClick={handleFormSubmit}
               >My Profile</button>
      </div>
      </div>
      </div>
      </div>
   
    )
}

export default Profile;