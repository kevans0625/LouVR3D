import React, { useState, useEffect, useContext } from "react"
import Exhibit from "../../components/Exhibit/index"
import API from "../../utils/API"
import UserContext from "../../content/UserContext"


function Viewing() {
    const { userData, setUserData } = useContext(UserContext);
    var [assets, setAssets] = useState()
    console.log(userData)
    let id = userData.user.id

    useEffect(() => {
        API.loadFavorites(id)
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