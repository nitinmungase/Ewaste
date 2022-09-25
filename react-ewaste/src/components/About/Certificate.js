import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "../../App.css"
import authService from "../../services/auth.service";

export default class Certificate extends Component {
  certificateWrapper = React.createRef();
  currentUser = authService.getCurrentUser();
  
  state = {
    Name: ""
  };
  render() {
    const currentUser = authService.getCurrentUser();
    return (
      <body  style={{paddingTop: 94 }} > 
      <div className="certi">
        <div className="Meta">
          <h1>E-Waste Certificate</h1>
          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p>{currentUser.fullname}</p>
            <img src="https://i.imgur.com/htD2Tm3.png" alt="Certificate"  width="1000px"/>
          </div>
        </div>
      </div>
      </body>
    );
  }
}

