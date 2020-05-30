import React from 'react';
import 'aframe'
import { Entity } from 'aframe-react'

function Sky(){
    return(
        <Entity
        geometry={{
          primitive: 'sphere', radius: 30, phiLength: 360, phiStart: 0, thetaLength: 90,
        }}
        material={{
          shader: 'flat', src: 'url(assets/sky.jpg)', side: 'back', height: 2048, width: 2048,
        }}
      />
    )
}

export default Sky;