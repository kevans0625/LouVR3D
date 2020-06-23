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
        geometry={{ primitive: 'box', radiusBottom: 1, radiusTop: 0.01, segmentsRadial: 4}}
        material={{ roughness: 0.5, src: "url(https://cors-anywhere.herokuapp.com/" + props.src +")"}}
        position="0 2 0"
        id={props.id}
<<<<<<< HEAD
        animation={{ property: "rotation", to: "0 180 0", loop: true, dur: 8000, easing: "linear" }}
=======
        animation={{ property: "rotation", to: "0 180 0", loop: true, dur: 3000, easing: "linear" }}
>>>>>>> b6f10a4963e2b790ea543cfb82979a078bb614b6
        events={{click: handleClick}}
      />
    )
}

export default Frame