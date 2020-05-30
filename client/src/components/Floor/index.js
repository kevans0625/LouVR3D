import React from "react"
import "aframe"
import { Entity } from "aframe-react"

function Floor() {
    return (

        <Entity
            geometry={{ primitive: 'circle', radius: 12 }}
            material={{ src: 'url(assets/brick.jpg)', shader: 'flat', roughness: 0 }}
            rotation="-90 0 0"
            static-body
        />
    )
}

export default Floor