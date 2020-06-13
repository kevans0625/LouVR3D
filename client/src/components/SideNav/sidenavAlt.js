import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import image2 from "../images/LouvreNight.jpg";
import image1 from "../images/pyramid.jpg";

class Sidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    };
    M.Sidenav.init(this.Sidenav);
    
    let instance = M.Sidenav.getInstance(this.Sidenav);
    // instance.open();
    console.log(instance.isOpen);
  }
  render() {
    return (
      <div>
        <ul
          ref={Sidenav => {
            this.Sidenav = Sidenav;
          }}
          id="slide-out"
          className="sidenav" >
          <li>
            <div className="user-view">
              <div className="background">
                <img src={image2} />
              </div>
             
                <img className="circle" src={image1} />
              
                <span className="white-text name">
                    Welcome Patronage!
                 </span>
             
            </div>
          </li>
          <li>
            <a href="/">
            <i className="material-icons">home</i>Home
            </a>
          </li>
          <li>
            <a href="/exhibit">
              <i className="material-icons">search</i>Discover Art 
            </a>
          </li>
          <li>
            <a href="/favorites">
              <i className="material-icons">star_half </i>View Favorites 
            </a>
          </li>
          <li>
            <a href="/louvr3d">
            <i className="material-icons">photo_library</i>Visit Le LouVr3D Exhibit
            </a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a href="/" className="subheader">Log Out</a>
          </li>
        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger right-align">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

export default Sidenav;
