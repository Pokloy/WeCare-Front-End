import React, { useRef, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function SideMenu() {
  const modalRef = useRef(null); // Reference for the modal element
  const navigate = useNavigate(); // React Router's navigation hook
  const [activeNavHome, setactiveNavHome] = useState(true);
  const [activeNavFind, setActiveNavFind] = useState(false);
  const [activeNavMes, setActiveNavMes] = useState(false);
  const [activeNavSupp, setActiveNavSupp] = useState(false);

  const clickedActiveHome = () => {
    setactiveNavHome(true);
    setActiveNavFind(false);
    setActiveNavMes(false);
    setActiveNavSupp(false);
  };

  const clickedActiveFind = () => {
    setactiveNavHome(false);
    setActiveNavFind(true);
    setActiveNavMes(false);
    setActiveNavSupp(false);
  };

  const clickedActiveMess = () => {
    setactiveNavHome(false);
    setActiveNavFind(false);
    setActiveNavMes(true);
    setActiveNavSupp(false);
  };

  const clickedActiveSupp = () => {
    setactiveNavHome(false);
    setActiveNavFind(false);
    setActiveNavMes(false);
    setActiveNavSupp(true);
  };

  const handleLogout = () => {
    navigate("/logout");
  };
  return (
    <>
      {/* Sidebar */}
      <div className="sidebar open">
        <div className="logo my-4 text-center">
          <img src="./wecare_logo.png" alt="WeCare" width="100" />
        </div>

        <div className="menu-items flex-grow-1 d-flex flex-column ml-4 mr-4">
          <div
            onClick={clickedActiveHome}
            className={
              activeNavHome ? "menu-item my-3 active" : "menu-item my-3"
            }
          >
            <span className="material-symbols-outlined side-menu-color icon-size ">
              home
            </span>
            <p className="ml-2">Home</p>
          </div>
          <div
            onClick={clickedActiveFind}
            className={
              activeNavFind ? "menu-item my-3 active" : "menu-item my-3"
            }
          >
            <span className="material-symbols-outlined side-menu-color icon-size">
              search
            </span>
            <p className="ml-2">Find</p>
          </div>
          <div
            onClick={clickedActiveMess}
            className={
              activeNavMes ? "menu-item my-3 active" : "menu-item my-3"
            }
          >
            <span className="material-symbols-outlined side-menu-color icon-size">
              chat
            </span>
            <p className="ml-2">Message</p>
          </div>
        </div>

        <div className="support-item mb-4 ml-4 mr-4">
          <div
            onClick={clickedActiveSupp}
            className={
              activeNavSupp ? "menu-item my-3 active" : "menu-item my-3"
            }
          >
            <span className="material-symbols-outlined side-menu-color icon-size">
              volunteer_activism
            </span>
            <p>Support</p>
          </div>
        </div>

        <div className="support-item logout-bottom mb-4 ml-4">
          <span className="material-symbols-outlined side-menu-color icon-size">
            logout
          </span>
          <button
            type="button"
            className="button-logout"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Log-Out
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Are you sure you Log-Out?
              </h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn button-modal-logout"
                onClick={handleLogout}
                data-dismiss="modal"
              >
                Yes
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
