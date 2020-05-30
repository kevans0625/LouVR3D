import React from "react"
import 'aframe'
import {Entity} from "aframe-react"

function Frame(props) {
    return(
        <Entity
        geometry={{ primitive: 'box', width: 1, depth: .25 }}
        material={{ roughness: 0.5, src:`url(${props.image})` }}
        scale={{ x: 2, y: 2, z: 2 }}
        position={props.position}
        rotation={props.rotation}
      />
    )
}

export default Frame