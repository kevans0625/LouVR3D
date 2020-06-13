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


    return (
        <div>
            {assets ? (<Exhibit art={assets} environment="egypt" />) : (<div />)}
            <div class="row" id="info">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img id="displayImage" />
                            <span class="card-title" id="title">Card Title</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewing