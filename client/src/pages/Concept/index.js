import React from 'react';
import 'aframe'
import 'aframe-layout-component'
import { Entity, Scene } from 'aframe-react'
import 'aframe-environment-component'
import UserContext from "../../content/UserContext";
import  { useState, useContext, useEffect } from "react";
import API from "../../utils/API";



function Concept() {

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
        console.log(res.data.image)
        setFavorites(res.data)
      }
      )
      .catch(err => {
        console.log(err)
      });
  };

    return (
        <Scene>
            {favorites.map(favorite => (
                <div>
                <a-camera>
                    <a-entity cursor=""
                        position=" 0 0 -1"
                        geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                        material="color: black; shader: flat">
                    </a-entity>
                </a-camera>
                <Entity light={{ type: "ambient", color: "#BBB" }} />
                <Entity layout="type: circle; plane: xz; radius: 5"
                    position="0 2 0">
                   
                    <Entity
                        animation={{ property: "rotation", to: "0 360 0", loop: true, dur: 100000, easing: "linear" }}
                        geometry={{ primitive: 'box', width: 2, height: 2, depth: 2 }}
                        material={{ roughness: 0.5, src: favorite.image }}
                    />
                </Entity>
                {console.log(favorites)}
                <a-sky src={"assets/colorful_studio.jpg"} />
                </div>
             ))}
        </Scene>
    )
}

export default Concept
