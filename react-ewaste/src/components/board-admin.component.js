import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Button, Modal } from "react-bootstrap";
import authService from "../services/auth.service";

const BoardAdmin = () => {
  const [currentDetails, setcurrentDetails] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setcurrentDetails(response.data);
      },
      (error) => {
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          error.toString();
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  const selectuser = (usernameid) => {
    setShow(true);
    authService.getUserDetails(usernameid).then((response) => {
      setUserDetails(response.data);
    });
  };

  return (
    <div style={{ paddingTop: 94 }}>
      <div className="container">
        <header className="jumbotron pt-4">
          <div className="container ">
            <div className="crud shadow-lg p-5 mb-3 mt-3 bg-body rounded">
              <div className="row ">
                <div className="text-center" style={{ color: "#198754" }}>
                  <h2>
                    <b>All Users Ewaste Record Details</b>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="table-responsive ">
                  <table className="table table-striped table-hover table-bordered">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>E-Waste Name</th>
                        <th>Pick Up Date</th>
                        <th>Quantity</th>
                        <th>Weight</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentDetails.map((getitems) => (
                        <tr key={getitems.id}>
                          <td>{getitems.id}</td>
                          <td>
                            <button
                              class="btn btn-light"
                              onClick={() => {
                                selectuser(getitems.usernameid);
                              }}
                            >
                              {getitems.usernameid}
                            </button>
                          </td>
                          <td>{getitems.title}</td>
                          <td>{getitems.date}</td>
                          <td>{getitems.quantity}</td>
                          <td>{getitems.weight}</td>
                          <td>
                            <button className="btn btn-light">
                              <i
                                style={{ color: "red" }}
                                onClick={() => {
                                  UserService.delete(getitems.id);
                                }}
                                className="material-icons"
                              >
                                &#xE872;
                              </i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* See User Details Modal*/}
        <Modal
          show={show}
          size="sm"
          animation={false}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-2">
            <div>
              <div className="table-responsive ">
                <table className="table table-striped table-hover table-bordered">
                  <tbody>
                    <tr>
                      <td class="h6">UserName</td>
                      <td>{userDetails.username}</td>
                    </tr>
                    <tr>
                      <td class="h6">Full Name</td>
                      <td>{userDetails.fullname}</td>
                    </tr>
                    <tr>
                      <td class="h6">Address</td>
                      <td>{userDetails.address}</td>
                    </tr>
                    <tr>
                      <td class="h6">ContactNo</td>
                      <td>{userDetails.mobile}</td>
                    </tr>
                    <tr>
                      <td class="h6">Email Id</td>
                      <td>{userDetails.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="p-1">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Ewaste Add Modal Finish*/}
      </div>
    </div>
  );
};
export default BoardAdmin;
