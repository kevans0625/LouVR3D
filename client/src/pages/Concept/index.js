import React from 'react';
import './App.css';
import 'aframe'
import 'aframe-layout-component'
import { Entity, Scene } from 'aframe-react'
import 'aframe-environment-component'

function Concept() {
    return (
        <Scene>
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
                    material={{ roughness: 0.5, src: "url(assets/puffin.jpg)" }}
                />
                <Entity
                    animation={{ property: "rotation", to: "0 360 0", loop: true, dur: 100000, easing: "linear" }}
                    geometry={{ primitive: 'box', width: 2, height: 2, depth: 2 }}
                    material={{ roughness: 0.5, src: "url(assets/four_thirds.jpg)" }}
                />
                <Entity
                    animation={{ property: "rotation", to: "0 360 0", loop: true, dur: 100000, easing: "linear" }}
                    geometry={{ primitive: 'box', width: 2, height: 2, depth: 2 }}
                    material={{ roughness: 0.5, src: "url(assets/pyramid.jpg)" }}
                />
            </Entity>
            <a-sky src={"assets/colorful_studio.jpg"} />
        </Scene>
    )
}

export default Concept
