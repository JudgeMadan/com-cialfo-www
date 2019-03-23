import React from "react";
import { NavLink } from "react-router-dom";

class Footer extends React.Component {
  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <footer className="footer mt-auto py-3 fixed-bottom bg-dark">
        <span className="text-muted">Hello from the footer</span>
      </footer>
    );
  }
}

export default Footer;
