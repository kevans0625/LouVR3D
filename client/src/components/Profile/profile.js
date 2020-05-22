import React from "react";
import avatar from "../image/Missing_avatar.png"


const Exhibit = () => {



    return (
        <div>
          <div className="container">
           <div className="row">
         <div className="col-md-6 col-md-offset-3">
        <h2>Welcome USER_NAME</h2>
        
        
        <div className="row">
        <img className="circle" 
        src={avatar}
        //  onClick={}
      />
      </div>


 <div className="row">
                    <span className="col">
                            <a className="social margin-left"><i className="social-i fas fa-map-marker-alt"></i>Name</a>
                           <br/><a  className="social margin-left"><i className="social-i fas fa-envelope-open-text"></i>Email: </a>
                           <br/><a  className="social margin-left" ><i className="social-i fas fa-phone-alt"></i>Password:</a>
                        </span>
                </div>
        
        //Upload images into AWS buckets 

        <button className="btn btn-default" href="/favorites">Favorites</button>

        <button  className="btn btn-default" href="/exhibit">Le LouVR3D exhibit </button>

    
          <button type="submit" className="btn btn-default"
              //  disabled={!(formObject.username || formObject.email || formObject.password)}
              //  onClick={handleFormSubmit}
               >Upload</button>
        {/* </form> */}
        <br />
        <button  href="/logout" className="btn btn-default"
              //  disabled={!(formObject.username || formObject.email || formObject.password)}
              //  onClick={handleFormSubmit}
               >Logout</button>
      </div>
      </div>
      </div>
      </div>
   
    )
}

export default Exhibit;