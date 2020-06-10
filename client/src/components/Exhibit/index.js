import React, { useEffect } from "react"
import "aframe"
import "aframe-layout-component"
import "aframe-environment-component"
import { Entity, Scene } from 'aframe-react'
import Frame from "../Frame"
import Camera from "../Camera"
import AssetLoader from "../AssetLoader"

function Exhibit(props) {
    const art = props.art
    const srcIndex = 0;
    return (
        <div>
            <Scene>
                <Entity environment={`preset: ${props.environment}`} />
                <Camera />
                <Entity light={{ type: "ambient", color: "#BBB" }} />
                <AssetLoader assets={props.art} />
                <Entity layout="type: circle; plane: xz; radius: 5;" position="0 2 0">
                    {art.map(painting => {
                        return (<Frame image={painting.image} id={painting.title}/>)
                    })}
                </Entity>
            </Scene>
        </div>
    )
}

export default Exhibit