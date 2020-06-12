import React, { Component } from "react";
import M from "materialize-css";
import Image from "./imageUploader";
import "materialize-css/dist/css/materialize.min.css";

class ImageModal extends Component {
  
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
          data-target="modal2" 
        >
       Image Uploader
        </a>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal2"
          className="modal"
        >
          <a className="modal-close waves-effect waves-green btn-flat">
          <i className="material-icons">close</i>
            </a>
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
          {/* <h4> Sign up for Le LouVr3d</h4> */}
          <Image/>
          </div>
         
        </div>
      </div>
    );
  }
}

export default ImageModal;
