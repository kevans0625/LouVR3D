import React from "react"

export function Input(props){
 return (
     
     <div className=" form-group">
    <input className="form-control" id="search" 
    type="text" placeholder="Search"  {...props}/>
        </div>
        );
        }
    
export function SearchButton(props){
    return (
      <button  className="btn btn-success" {...props} style={{ float: "right" }}>
        Search
      </button>
        )
        }
