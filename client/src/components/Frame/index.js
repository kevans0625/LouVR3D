import React from "react"
import 'aframe'
import {Entity} from "aframe-react"

function Frame(props) {

  function handleClick(element) {
    var title = document.getElementById("title")
    var image = document.getElementById("displayImage")
    var info = document.getElementById("info")

    title.innerHTML = element.target.id
    image.setAttribute("src", props.src)
    info.style.zIndex = 1;

    
    
  }
 
    return(
        <Entity
        geometry={{ primitive: 'cone', radiusBottom: 1, radiusTop: 0.01, segmentsRadial: 4}}
        material={{ roughness: 0.5,  color: "#ef6040" }}
        position="0 2 0"
        id={props.id}
        animation={{ property: "rotation", to: "0 360 0", loop: true, dur: 3000, easing: "linear" }}
        events={{click: handleClick}}
      />
    )
}

export default Frame