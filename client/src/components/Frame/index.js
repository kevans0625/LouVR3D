import React from "react"
import 'aframe'
import {Entity} from "aframe-react"

function Frame(props) {

  function handleClick(element) {
    console.log(element.target.id)
  }

    return(
        <Entity
        geometry={{ primitive: 'box', width: 1, depth: .25, height: 1 }}
        material={{ roughness: 0.5, src:`${props.image}`}}
        position="0 2 0"
        id={props.id}
        animation={{ property: "rotation", to: "0 360 0", loop: true, dur: 100000, easing: "linear" }}
        events={{click: handleClick}}
      />
    )
}

export default Frame