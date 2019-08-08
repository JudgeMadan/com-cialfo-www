import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "../Layout/Layout.css";
import TranslateButton from "./TranslateButton";
import PathToRegexp from "path-to-regexp";
import { withRouter } from "react-router-dom";
import MediaQuery from "react-responsive";

class FullScreenHeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateLocale = locale => {
    this.props.updateLocale(locale);
  };

  identifySpace = location => {
    const ROUTE = "/:space/:locale/:path*";
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    if (routeComponents) {
      return routeComponents[1];
    } else return "hey";
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.setState({
        space: this.identifySpace(this.props.location)
      });
    }
  }

  componentDidMount() {
    this.identifySpace(this.props.location);
  }

  buildCustomNavLinks = () => {
    let table = []
    for(let i = 0; i < 6; i++){
      if(this.props.name[i] != null){
        table.push(<div>
          <NavLink activeClassName="activeStyle" className="nav-link" to={this.props.link[i]}>
            {this.props.name[i]}
          </NavLink>
        </div>)
      }
    }
    return table;
  }

  render() {
    return (
      <Nav>

        {this.buildCustomNavLinks()}

        {this.identifySpace(this.props.location) === "cn" && (
          <TranslateButton
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
            updateLocale={this.updateLocale}
          />
        )}
        <div>
          <NavLink
            activeClassName="activeStyle"
            className="demo-page-link"
            // className="nav-link demo-page-link"
            to={this.props.linkDemo}
          >
            <Button
              className="nav-link-button sharp-corners-button"
              size="sm"
              variant="primary"
            >
              {this.props.nameDemo}
            </Button>
          </NavLink>
        </div>
      </Nav>
    );
  }
}

export default withRouter(FullScreenHeaderLinks);
