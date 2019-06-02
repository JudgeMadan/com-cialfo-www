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
import PathToRegexp, { compile, parse } from "path-to-regexp";
import { withRouter } from "react-router-dom";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  generateLocale = location => {
    const ROUTE = "/:space/:locale/:path*";
    const routeComponents = PathToRegexp(ROUTE).exec(location);
    if (routeComponents) {
      return routeComponents[2];
    } else return;
  };

  generateSpace = location => {
    const ROUTE = "/:space/:locale/:path*";
    const routeComponents = PathToRegexp(ROUTE).exec(location);
    if (routeComponents) {
      return routeComponents[1];
    } else return;
  };

  setSpace = () => {
    if (this.generateSpace(this.props.location.pathname)) {
      if (this.generateSpace(this.props.location.pathname) === "cn") {
        return this.props.spaces.cn.space;
      } else if (this.generateSpace(this.props.location.pathname) === "intl") {
        return this.props.spaces.intl.space;
      } else if (this.generateSpace(this.props.location.pathname) === "in") {
        return this.props.spaces.india.space;
      } else if (this.generateSpace(this.props.location.pathname) === "us") {
        return this.props.spaces.us.space;
      }
    } else {
      if (this.props.spaceName === "china") {
        return this.props.spaces.cn.space;
      } else if (this.props.spaceName === "india") {
        return this.props.spaces.india.space;
      } else if (this.props.spaceName === "intl") {
        return this.props.spaces.intl.space;
      } else if (this.props.spaceName === "us") {
        return this.props.spaces.us.space;
      }
    }
  };

  setAccessToken = () => {
    if (this.generateSpace(this.props.location.pathname)) {
      if (this.generateSpace(this.props.location.pathname) === "cn") {
        return this.props.spaces.cn.accessToken;
      } else if (this.generateSpace(this.props.location.pathname) === "intl") {
        return this.props.spaces.intl.accessToken;
      } else if (this.generateSpace(this.props.location.pathname) === "in") {
        return this.props.spaces.india.accessToken;
      } else if (this.generateSpace(this.props.location.pathname) === "us") {
        return this.props.spaces.us.accessToken;
      }
    } else {
      if (this.props.spaceName === "china") {
        return this.props.spaces.cn.accessToken;
      } else if (this.props.spaceName === "intl") {
        return this.props.spaces.intl.accessToken;
      } else if (this.props.spaceName === "india") {
        return this.props.spaces.india.accessToken;
      } else if (this.props.spaceName === "us") {
        return this.props.spaces.us.accessToken;
      }
    }
  };

  generateUrl = (path, location) => {
    const ROUTE = "/:space/:locale/:path*";
    const definePath = compile(ROUTE);
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    if (routeComponents && routeComponents[3]) {
      return definePath({
        space: routeComponents[1],
        locale: routeComponents[2],
        path: path
      });
    } else if (routeComponents && routeComponents[3] == undefined) {
      return definePath({
        space: routeComponents[1],
        locale: routeComponents[2],
        path: "a"
      });
    }
  };

  fetchNavBar = () =>
    contentful
      .createClient({
        space: this.setSpace(),
        accessToken: this.setAccessToken()
      })
      .getEntries({
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
    console.log(this.state.width);
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
                          to="features"
                        >
                          {this.state.whyCialfo}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="solutions-principals"
                        >
                          {this.state.forPrincipals}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="solutions-counselors"
                        >
                          {this.state.forCounselors}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="solutions-it"
                        >
                          {this.state.forItTeams}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-3 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="solutions-superintendents"
                        >
                          {this.state.forSuperintendents}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="cialfo-vs-bridge-u"
                        >
                          {this.state.cialfoVsBridgeU}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="cialfo-vs-naviance"
                        >
                          {this.state.cialfoVsNaviance}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="cialfo-vs-maia"
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
                          to="events"
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
                          to="about"
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
            {/* <Col className="footer-logo">
              <Row className="">
                <Link
                  to={this.generateUrl("home", this.props.location)}
                  className="navbar-brand"
                >
                  <img src={Logo} />
                </Link>
              </Row>
            </Col> */}
            <Col className="justify-content-md-end footer-logo">
              <Row className="justify-content-md-end">
                <Link
                  to={this.generateUrl("home", this.props.location)}
                  className="navbar-brand"
                >
                  <img src={Logo} />
                </Link>
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
                          to="features"
                        >
                          {this.state.whyCialfo}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="solutions-principals"
                        >
                          {this.state.forPrincipals}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="solutions-counselors"
                        >
                          {this.state.forCounselors}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="solutions-it"
                        >
                          {this.state.forItTeams}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-3 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="solutions-superintendents"
                        >
                          {this.state.forSuperintendents}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="cialfo-vs-bridge-u"
                        >
                          {this.state.cialfoVsBridgeU}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="cialfo-vs-naviance"
                        >
                          {this.state.cialfoVsNaviance}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link nav-link"
                          to="cialfo-vs-maia"
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
                          to="events"
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
                          to="about"
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
