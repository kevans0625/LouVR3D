import React from "react"
import 'aframe'

function Camera() {
    return (
        <a-camera>
            <a-entity cursor=""
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: black; shader: flat">
            </a-entity>
        </a-camera>
    )
}