import React, { useState, useEffect } from "react"
import BucketExhibit from "../../components/BucketExhibit/index"
import API from "../../utils/API"


function UploadExhibit() {
    var [assets, setAssets] = useState()

    useEffect(() => {
        API.getImages()
            .then(res => {
                setAssets(res.data)
                console.log(res)
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                };
            })
    }, [])


    return (
        <div>
            {assets ? (<BucketExhibit art={assets} environment="egypt" />) : (<div />)}
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

export default UploadExhibit