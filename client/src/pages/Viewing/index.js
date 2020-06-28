import React, { useState, useEffect } from "react"
import Exhibit from "../../components/Exhibit/index"
import API from "../../utils/API"


function Viewing() {
    var [assets, setAssets] = useState()

    useEffect(() => {
        API.loadAllFavorites()
            .then(res => {
                setAssets(res.data)
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                };
            })
    }, [])

console.log(assets)
    return (
        <div>
            {assets ? (<Exhibit art={assets} environment="egypt" />) : (<div />)}
            <div className="row" id="info">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img id="displayImage" />
                            <span className="card-title" id="title">Card Title</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewing