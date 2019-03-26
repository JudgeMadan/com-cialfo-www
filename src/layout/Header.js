import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <NavLink to="/" className="navbar-brand">
          Cialfo
        </NavLink>
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <NavLink className="nav-link" to="/client">
              Clients
            </NavLink>
          </li>
          <li className="navbar-item dropdown">
            <NavLink className="nav-link" to="/feature">
              Features
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
