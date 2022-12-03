import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [list, setList] = useState(false);

  return (
    <>
      <div className="nav">
        <nav>
          <Link to="/" className="home">
            {" "}
            <div className="img-logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5448/5448104.png"
              alt="logo"
              className="logo"
            />
            </div>
          </Link>
          <div className="menu">
            <div className="img-menu ">
              <img
                src="https://img.icons8.com/windows/512/menu-rounded.png"
                alt="menu icon"
                className={list ? "nav-list" : "display"}
                onClick={() => {
                  setList(!list);
                }}
              />

              <img
                src="https://img.icons8.com/material-two-tone/512/delete-sign.png"
                rel="preconnect"
                alt="cancel button"
                style={{ color: "pink" }}
                className={list ? "display" : "nav-list"}
                onClick={() => {
                  setList(!list);
                }}
              />
            </div>
          </div>
        </nav>
        <ul className={list ? "nav-list view" : "nav-list"}>
          <li>
            <Link to="/">Home</Link>
          </li>
       
            <li>
              <Link to="/">About Us</Link>
            </li>
            
          
          <li>
            <Link to="/">How it works</Link>
          </li>
          <li>
            <Link to="/DeepStorage">Store data</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
              <Link to="/Upload">Sign in</Link>
            </li>
          
        </ul>
      </div>
    </>
  );
}

export default Navbar;
