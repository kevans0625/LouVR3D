import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Dropdown extends Component {
  componentDidMount() {
    const options = {
      // hover: true,
      // closeOnClick: true,
      alignment: "right",
      onOpenStart: () => {
        console.log("onOpenStart");
      },
      onOpenEnd: () => {
        console.log("onOpenEnd");
      },
      onCloseStart: () => {
        console.log("onCloseStart");
      },
      onCloseEnd: () => {
        console.log("onCloseEnd");
      },
      inDuration: 300,
      outDuration: 200
    };
    M.Dropdown.init(this.Dropdown, options);
    let instance = M.Dropdown.getInstance(this.Dropdown);
  }

  render() {
    return (
      <div>
        <a
          ref={Dropdown => {
            this.Dropdown = Dropdown;
          }}
          className="dropdown-trigger btn waves-effect"
          href="#"
          data-target="dropdown1"
        >
          Drop Me!
        </a>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!">one</a>
          </li>
          <li>
            <a href="#!">two</a>
          </li>
          <li>
            <a href="#!">three</a>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">view_module</i>four
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>five
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
