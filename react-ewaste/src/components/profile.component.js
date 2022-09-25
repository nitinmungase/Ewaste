import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div style={{paddingTop: 120 }} > 
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <div class="breadcrumb">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </div>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>User Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>User Name:</strong>{" "}
          {currentUser.username}
        </p>
        <p>
          <strong>Full Name:</strong>{" "}
          {currentUser.fullname}
        </p>
        <p>
          <strong>Email Id:</strong>{" "}
          {currentUser.email}
        </p>
        <p>
          <strong>Mobile Number:</strong>{" "}
          {currentUser.mobile}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>: null}
      </div>
      </div>
    );
  }
}