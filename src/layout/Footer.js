import React from "react";
class Footer extends React.Component {
  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <div className="navbar pt-0 navbar-expand-md navbar-dark fixed-bottom bg-dark">
        <ul className="navbar-nav mr-auto mb-0 ">
          <li className="navbar-item">
            <p className="nav-link">Security</p>
          </li>
          <li className="navbar-item">
            <p className="nav-link">Privacy-Policy</p>
          </li>
          <li className="navbar-item">
            <p className="nav-link">Contact Us</p>
          </li>
          <li className="navbar-item">
            <p className="nav-link">Our Partners</p>
          </li>
          <li className="navbar-item">
            <p className="nav-link">Cialfo vs BridgeU</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
