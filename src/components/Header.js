import React from "react";

function Header() {
  return (
    <div className="App-header">
      <div className="flex-container">
        <div className="header-logo">LiveEO</div>
        <div className="header-items">
          <div className="header-item">Map</div>
          <div className="header-item">Tasks</div>
          <div className="header-item">Dashboard</div>
          <div className="active">Comments</div>
          <div className="header-item">Admin</div>
          <div className="header-item">
            <div className="header-username">L</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
