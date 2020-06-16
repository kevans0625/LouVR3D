import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Avatar from "./avatarEdit";

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
          className="waves-effect hidden waves-light btn modal-trigger"
          data-target="modal3"
        >
         Edit Profile
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal3"
          className="modal"
        >
          <a className="modal-close waves-effect waves-green btn-flat">
          <i className="material-icons">close</i>
            </a>
          <div className="modal-content">
            <Avatar/>
          </div>
      
        </div>
      </div>
    );
  }
}

export default Modal;
