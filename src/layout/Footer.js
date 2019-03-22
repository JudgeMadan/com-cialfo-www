import React from "react";
import { NavLink } from "react-router-dom";

class Footer extends React.Component {
  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return <h1>Hello from Footer </h1>;
  }
}

export default Footer;
