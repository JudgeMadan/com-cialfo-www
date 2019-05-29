import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import * as contentful from "contentful";
import Logo from "../img/Logo.svg";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "./Layout/Layout.css";
import MediaQuery from "react-responsive";
import PathToRegexp from "path-to-regexp";
import { withRouter } from "react-router-dom";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateLocale = location => {
    const ROUTE = "/:space/:locale/:path*";
    const routeComponents = PathToRegexp(ROUTE).exec(location);
    return routeComponents[2];
  };

  generateSpace = location => {
    const ROUTE = "/:space/:locale/:path*";
    const routeComponents = PathToRegexp(ROUTE).exec(location);
    return routeComponents[1];
  };

  setSpace = () => {
    if (this.generateSpace(this.props.location.pathname) === "cn") {
      return this.props.spaces.cn.space;
    }
    if (this.generateSpace(this.props.location.pathname) === "intl") {
      return this.props.spaces.intl.space;
    }
  };

  setAccessToken = () => {
    if (this.generateSpace(this.props.location.pathname) === "cn") {
      return this.props.spaces.cn.accessToken;
    }
    if (this.generateSpace(this.props.location.pathname) === "intl") {
      return this.props.spaces.intl.accessToken;
    }
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken()
  });

  fetchNavBar = () =>
    this.client.getEntries({
      content_type: "footer",
      locale: this.generateLocale(this.props.location.pathname)
    });

  setNavBar = response => {
    const footerContent = response.items[0].fields;
    for (let key in footerContent) {
      this.setState({
        [key]: footerContent[key]
      });
    }
  };

  componentDidMount() {
    this.fetchNavBar().then(this.setNavBar);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.fetchNavBar().then(this.setNavBar);
    }
  }

  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <NavBar
            className="
        footer-background align-items-start justify-content-between footer"
            sticky="bottom"
          >
            <Col>
              <Row className="small">
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="pb-1 pt-1 font-weight-bold footerListGroupItem">
                        {this.state.platform}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/features"
                        >
                          {this.state.whyCialfo}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/solutions/principals"
                        >
                          {this.state.forPrincipals}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/solutions/counselors"
                        >
                          {this.state.forCounselors}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/solutions/it"
                        >
                          {this.state.forItTeams}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-3 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/solutions/superintendents"
                        >
                          {this.state.forSuperintendents}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/cialfo-vs-bridge-u"
                        >
                          {this.state.cialfoVsBridgeU}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/cialfo-vs-naviance"
                        >
                          {this.state.cialfoVsNaviance}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/cialfo-vs-maia"
                        >
                          {this.state.cialfoVsMaia}
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="font-weight-bold pt-1 pb-1 footerListGroupItem">
                        {this.state.resources}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.knowledgeBase}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.community}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.cialfoTips}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/events"
                        >
                          {this.state.events}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.partners}
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="pb-1 pt-1 font-weight-bold footerListGroupItem">
                        {this.state.team}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/about"
                        >
                          {this.state.aboutUs}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.blog}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.mediaKit}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.careers}
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
              </Row>
            </Col>
            <Col className="justify-content-md-end footer-logo">
              <Row className="justify-content-md-end">
                <Link to="/" className="navbar-brand">
                  <img src={Logo} />
                </Link>
                {/* <p className="footer-country-id">{this.props.spaceName}</p> */}
              </Row>
            </Col>
          </NavBar>
        </MediaQuery>
        {/* MOBILE FOOTER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <NavBar
            className="
            footer-background align-items-start justify-content-between footer"
            sticky="bottom"
          >
            <Col>
              <Row className="small">
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="pb-1 pt-1 font-weight-bold footerListGroupItem">
                        {this.state.platform}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/features"
                        >
                          {this.state.whyCialfo}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/solutions/principals"
                        >
                          {this.state.forPrincipals}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/solutions/counselors"
                        >
                          {this.state.forCounselors}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/solutions/it"
                        >
                          {this.state.forItTeams}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-3 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/solutions/superintendents"
                        >
                          {this.state.forSuperintendents}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/cialfo-vs-bridge-u"
                        >
                          {this.state.cialfoVsBridgeU}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/cialfo-vs-naviance"
                        >
                          {this.state.cialfoVsNaviance}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/cialfo-vs-maia"
                        >
                          {this.state.cialfoVsMaia}
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="font-weight-bold pt-1 pb-1 footerListGroupItem">
                        {this.state.resources}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.knowledgeBase}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.community}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.cialfoTips}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/events"
                        >
                          {this.state.events}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.partners}
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="pb-1 pt-3 font-weight-bold footerListGroupItem">
                        {this.state.team}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="/about"
                        >
                          {this.state.aboutUs}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.blog}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.mediaKit}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        {this.state.careers}
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
              </Row>
            </Col>
          </NavBar>
        </MediaQuery>
      </div>
    );
  }
}

export default withRouter(Footer);
