import React from 'react'
import 'aframe'
import 'aframe-environment-component'
import { Entity } from 'aframe-react'

function Environment(props) {
    return (
        <Entity environment={`preset: ${props.environment}`}
        animation={{ property: "rotation", to: "0 360 0", loop: true, dur: 100000, easing:"linear" }}/>
    )
}

export default Environment;