import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import * as contentful from "contentful";
import Logo from "../img/cialfo-vertical_blue@4x.png";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "./Layout/Layout.css";
import MediaQuery from "react-responsive";
import PathToRegexp, { compile, parse } from "path-to-regexp";
import { withRouter } from "react-router-dom";
import { DataContext } from "../contexts/DataContext"

class Footer extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      data: {}
    };
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

  generateSpace = location => {
    const ROUTE = "/:space/:locale/:path*";
    const routeComponents = PathToRegexp(ROUTE).exec(location);
    if (routeComponents) {
      return routeComponents[1];
    } else return;
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.context.fetchEntries("footer").then((response) => {
      let data = this.context.setContent(response)
      this.setState({
        data: data
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.context.fetchEntries("footer").then((response) => {
        let data = this.context.setContent(response)
        this.setState({
          data: data
        })
      });
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
                        {this.state.data.platform}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="features">
                          {this.state.data.whyCialfo}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-principals"
                        >
                          {this.state.data.forPrincipals}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-counselors"
                        >
                          {this.state.data.forCounselors}
                        </NavLink>
                      </ListGroup.Item>
                      {/* <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="solutions-it">
                          {this.state.forItTeams}
                        </NavLink>
                      </ListGroup.Item> */}
                      {this.generateSpace(this.props.location.pathname) == "us" && (
                      <ListGroup.Item className="pb-3 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-superintendents"
                        >
                          {this.state.data.forSuperintendents}
                        </NavLink>
                      </ListGroup.Item>
                    )}
                    </ListGroup>
                  </Nav>
                </Col>
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="font-weight-bold pt-1 pb-1 footerListGroupItem">
                        {this.state.data.resources}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://help.cialfo.co"
                          target="_blank"
                        >
                          {this.state.data.knowledgeBase}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://facebook.com/cialfo"
                          target="_blank"
                        >
                          {this.state.data.community}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="events">
                          {this.state.data.events}
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="pb-1 pt-1 font-weight-bold footerListGroupItem">
                        {this.state.data.team}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="about">
                          {this.state.data.aboutUs}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://blog.cialfo.co"
                          target="_blank"
                        >
                          {this.state.data.blog}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://angel.co/company/cialfo"
                          target="_blank"
                        >
                          {this.state.data.careers}
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
              </Row>
            </Col>
            <Col className="justify-content-sm-end justify-content-md-end  footer-logo">
              <Row className="justify-content-sm-end justify-content-md-end">
                <Link
                  // to={this.generateUrl("home", this.props.location)}
                  to="home"
                  className="navbar-brand"
                >
                  <img className="footer-logo-image logo" src={Logo} />
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
                        {this.state.data.platform}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="features">
                          {this.state.data.whyCialfo}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-principals"
                        >
                          {this.state.data.forPrincipals}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-counselors"
                        >
                          {this.state.data.forCounselors}
                        </NavLink>
                      </ListGroup.Item>
                      {/* <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="solutions-it">
                          {this.state.forItTeams}
                        </NavLink>
                      </ListGroup.Item> */}
                      {this.generateSpace(this.props.location.pathname) == "us" && (
                      <ListGroup.Item className="pb-3 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-superintendents"
                        >
                          {this.state.data.forSuperintendents}
                        </NavLink>
                      </ListGroup.Item>
                    )}
                    </ListGroup>
                  </Nav>
                </Col>
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="font-weight-bold pt-1 pb-1 footerListGroupItem">
                        {this.state.data.resources}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://help.cialfo.co"
                          target="_blank"
                        >
                          {this.state.data.knowledgeBase}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://facebook.com/cialfo"
                          target="_blank"
                        >
                          {this.state.data.community}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="events">
                          {this.state.data.events}
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="pb-1 pt-3 font-weight-bold footerListGroupItem">
                        {this.state.data.team}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="about">
                          {this.state.data.aboutUs}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://blog.cialfo.co"
                          target="_blank"
                        >
                          {this.state.data.blog}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://angel.co/company/cialfo"
                          target="_blank"
                        >
                          {this.state.data.careers}
                        </a>
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
