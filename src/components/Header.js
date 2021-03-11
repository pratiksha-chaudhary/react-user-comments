import React from "react";

function Header() {
  return (
    <div className="App-header">
      <div className="flex-container">
        <div className="header-item-logo">
          <div href="#home">LiveEO</div>
        </div>
        <div className="header-item">
          <a href="#map">Map</a>
          <a href="#map">Tasks</a>
          <a href="#map">Dashboard</a>
          <a className="active" href="#map">
            Comments
          </a>
          <a href="#map">
            <span className="admin">Admin</span>
          </a>
          <div className="username username-circle">
            <span href="#map">L</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
