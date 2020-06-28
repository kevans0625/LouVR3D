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
            <div className="row" id="info">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img id="displayImage" />
                            <span className="card-content" id="title"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadExhibit