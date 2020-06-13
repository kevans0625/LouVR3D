import React from "react"
import "aframe"
import "aframe-layout-component"
import "aframe-environment-component"
import { Entity, Scene } from 'aframe-react'
import Frame from "../Frame"
import Camera from "../Camera"

function BucketExhibit(props) {
    const art = props.art
    console.log(props)
    return (
        <div>
            <Scene>
                <Entity environment={`preset: ${props.environment}`} />
                <Camera />
                <Entity light={{ type: "ambient", color: "#BBB" }} />
                <a-assets timeout="3000">
                    {art.map((asset, index)=>{
                        return(<img src={asset.image} id={`src${index}`} key={index} />)
                    })}
                </a-assets>
                <Entity layout="type: circle; plane: xz; radius: 5;" position="0 2 0">
                    {art.map((painting, index) => {
                        return (<Frame image={`#src${index}`} id={painting.s3_key} src={`https://louvr3d.s3.us-east-2.amazonaws.com/${painting.s3_key}`} />)
                    })}
                </Entity>
            </Scene>
        </div>
    )
}

export default BucketExhibit