import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import image2 from "../images/LouvreNight.jpg";
import image1 from "../images/pyramid.jpg";

<<<<<<< HEAD
=======

>>>>>>> 162197c7b383483f8fddf9315ed1b3d623e398ea
class SidenavAlt extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    };
    M.Sidenav.init(this.Sidenav);
<<<<<<< HEAD
    
=======
>>>>>>> 162197c7b383483f8fddf9315ed1b3d623e398ea
    let instance = M.Sidenav.getInstance(this.Sidenav);
    // instance.open();
    console.log(instance.isOpen);
  }
<<<<<<< HEAD
=======
  
>>>>>>> 162197c7b383483f8fddf9315ed1b3d623e398ea
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
<<<<<<< HEAD
             
                <img className="circle" src={image1} />
              
                <span className="white-text name">
                    Welcome Patronage!
                 </span>
             
=======
                <img className="circle" src={image1} />
                <span className="white-text name">
                    Welcome Patronage!
                 </span>
>>>>>>> 162197c7b383483f8fddf9315ed1b3d623e398ea
            </div>
          </li>
          <li>
            <a href="/">
            <i className="material-icons">home</i>Home
            </a>
          </li>
          <li>
            <a href="/exhibit">
<<<<<<< HEAD
              <i className="material-icons">search</i>Discover Art 
=======
              <i className="material-icons">search</i>Discover Art
>>>>>>> 162197c7b383483f8fddf9315ed1b3d623e398ea
            </a>
          </li>
          <li>
            <a href="/favorites">
<<<<<<< HEAD
              <i className="material-icons">star_half </i>View Favorites 
=======
              <i className="material-icons">star_half </i>View Favorites
>>>>>>> 162197c7b383483f8fddf9315ed1b3d623e398ea
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
<<<<<<< HEAD
          <li>
         <a href="/concept">
         <i className="material-icons">directions_run</i>Demo Concept
         </a>
       </li>
        </ul>

=======
        </ul>
>>>>>>> 162197c7b383483f8fddf9315ed1b3d623e398ea
        <a href="#!" data-target="slide-out" className="sidenav-trigger right-align">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}
<<<<<<< HEAD

export default SidenavAlt;
=======
export default SidenavAlt;
>>>>>>> 162197c7b383483f8fddf9315ed1b3d623e398ea
