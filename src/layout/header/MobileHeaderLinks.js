import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../Layout/Layout.css";
import MobileTranslateButton from "./MobileTranslateButton";

class FullScreenHeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateLocale = locale => {
    this.props.updateLocale(locale);
  };

  render() {
    return (
      <Nav>
        <NavLink
          activeClassName="mobile-activeStyle"
          className="mobile-nav-link"
          to="/clients"
        >
          {this.props.clientsPage}
        </NavLink>

        <NavLink
          activeClassName="mobile-activeStyle"
          className="mobile-nav-link"
          to="/features"
        >
          {this.props.featuresPage}
        </NavLink>
        <NavLink
          activeClassName="mobile-activeStyle"
          className="mobile-nav-link"
          to="/about"
        >
          {this.props.aboutUsPage}
        </NavLink>
        {/* <Link className="mobile-nav-link" to="/resources">
              {this.state.resourcesPage}
            </Link> */}
        <NavLink
          activeClassName="mobile-activeStyle"
          className="mobile-nav-link"
          to="/solutions"
        >
          {this.props.solutionsPage}
        </NavLink>
        {this.props.country_code === "country_code=CN" && (
          <MobileTranslateButton
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
            updateLocale={this.updateLocale}
          />
        )}
        <NavLink
          activeClassName="mobile-activeStyle"
          className="mobile-nav-link demo-page-link"
          to="/demo"
        >
          {this.props.demoPage}
        </NavLink>
      </Nav>
    );
  }
}

export default FullScreenHeaderLinks;
