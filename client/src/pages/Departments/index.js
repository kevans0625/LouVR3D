import React, { useContext } from "react";
import { useHistory } from "react-router-dom"
import pyramid from "../../components/images/pyramid.jpg"
import HomeScene from "../../components/HomeScene/index"
import UserContext from "../../content/UserContext";
// import M from "materialize-css"
import Sidenav from "../../components/SideNav/sidenav";
import Departments from "./departments.js";

const DeptView = () => {
    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory();

    const handleLogin = () => {
        history.push("/login")
    }

    const handleSignup = () => {
        history.push("/signup")
    }

    const handleLogout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token", "")
    }

    const viewExhibit = (id) => {
        console.log(id)
        history.push("/exhibit", {id: id} )
    }

    console.log(Departments)
    return (
        <div>
            <HomeScene />
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <br />
                            <div className="col s12">
<h2 className="homeheader">Welcome to Le LouVr3D</h2>


<h5 className="white-text">A VIRTUAL ART WORLD OF 3D EXPERIENCES. </h5>
<p className="white-text">Tap an exhibit title to explore it in 3D. </p>

</div>
{userData.user ? (
<div className="col s12">
    <Sidenav
        userData={userData}
    />
    <br/>
        <div className="col">
            <div className="row s12 m6 ">
                {Departments.map(exhibit => (
                    <span className="margin-bottom" key={exhibit.departmentId}>
                        <a type="submit" className="btn btn-large" onClick={()=>viewExhibit(exhibit.departmentId)}>{exhibit.displayName}</a>
                    </span>

                ))}
            </div>
<div className="col s6">
<button type="submit" className="btn btn-default" href="/login"
    onClick={handleLogout}>Logout</button>
</div>
        </div>
                </div>
    ) : (
            <div>
                <>
                    <div className="col s6">
                        <button type="submit" className="btn btn-default" href="/login"
                            onClick={handleLogin}>Log In</button>
                    </div>
                    <div className="col s6">
                        <button type="submit" className="btn btn-default" href="/signup"
                            onClick={handleSignup}>Sign Up</button>
                    </div>
                </>
            </div>
)}
            </div>


</div>

</div>

  )
}



export default DeptView;


// {userData.user ? (
// <div className="col s12">
//     <Sidenav
//         userData={userData}
//     />
//     {Departments ? (
//         <div className="col">
//             <div className="row s12 m6 ">
//                 {Departments.map(exhibit => (
//                     <span >
//                         <a type="submit" className="btn btn-large" href="/login" onClick={viewExhibit}>{exhibit.displayName}</a>
//                     </span>
//                 ))}
//             </div>
//         </div>
//     ) : (
//             <div>
//                 <>
//                     <div className="col s6">
//                         <button type="submit" className="btn btn-default" href="/login"
//                             onClick={handleLogin}>Log In</button>
//                     </div>
//                     <div className="col s6">
//                         <button type="submit" className="btn btn-default" href="/signup"
//                             onClick={handleSignup}>Sign Up</button>
//                     </div>
//                 </>
//             </div>
// )}
// </div>
