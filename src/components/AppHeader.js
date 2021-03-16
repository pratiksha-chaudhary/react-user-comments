import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="App-header">
      <div className="header-item-logo">
        <Link to={`/`} >LiveEO</Link>
      </div>
      <div className="header-item">
        <NavLink to={`/map`} activeclassname="active"><div className="header-non-button-item">Map</div></NavLink>
        <NavLink to={`/tasks`} activeclassname="active"><div className="header-non-button-item">Tasks</div></NavLink>
        <NavLink to={`/dashboard`} activeclassname="active"><div className="header-non-button-item">Dashboard</div></NavLink>
        <NavLink to={`/comments`} activeclassname="active"><div className="header-non-button-item">Comments</div></NavLink>
        <NavLink to={`/admin`} activeclassname="active" className="button-element">
          <div >Admin</div>
        </NavLink>
        <div className="username username-circle">
          <span>L</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
