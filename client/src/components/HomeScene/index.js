import React from 'react'
import 'aframe'
import Environment from '../Environment/index'
import Camera from '../Camera/index'
import { Entity, Scene } from 'aframe-react'

function HomeScene() {
    return (<Scene>
        <Environment
            environment="egypt"
            animation={{ property: "rotation", to: "0 360 0", loop: true, dur: 10000, easing: "linear" }}></Environment>
        <Entity camera
        >
            <Entity
                geometry={{ primitive: "cone", radiusBottom: 1, radiusTo: 0.1, segmentsRadial: 4 }}
                material={{ color: "#ef6040" }}
                position="0 3 -4"
                animation={{ property: "rotation", to: "0 360 0", loop: true, dur: 10000, easing: "linear" }}
            ></Entity>

        </Entity>
        <Entity light={{ type: "ambient", color: "#BBB" }}>

        </Entity>
    </Scene>
    )
}

export default HomeScene;