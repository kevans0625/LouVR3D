import React from 'react'
import 'aframe'

function AssetLoader(props) {
    const assets = props.assets
    assets.map(art => art.image)
    var mapIndex = 0;
    const loaded = assets.map(asset => {
        mapIndex ++;
        return <img id={`src${mapIndex}`} src={asset} width="300px" height="300px"/>
    })

    return(
        <a-assets>
            {loaded}
        </a-assets>
    )
    
}

export default AssetLoader