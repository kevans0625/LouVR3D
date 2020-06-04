import React, { Component } from "react";
import M from "materialize-css";
import Login from "./login";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1" href="/"
        >
          Login
        </a>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
          <h4>Login to Le LouVr3d</h4>
          <Login/>
          {/* <form className="signup">
      <div className="form-group">
          <input 
          // type="username"  
          className="form-control" 
          id="username-input" 
          placeholder="Username (required)" 
          // onChange={handleInputChange}
          name="username"/>
        </div>
        <div className="form-group">
          <input 
          type="password" 
          className="form-control" 
          id="password-input" 
          placeholder="Password (required)" 
          // onChange={handleInputChange}
          name="password"/>
        </div>
        <br/>
        <button type="submit" className="btn btn-default"
            //  disabled={!(formObject.username || formObject.password)}
            //  onClick={handleFormSubmit}
             >Login
        </button>
      </form> */}
          </div>
          {/* <div className="modal-footer">
            <a  href="/"className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a>
            <a href="/" className="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Modal;
