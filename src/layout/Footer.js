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
    const { data } = this.state;
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
                        {data.platform}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="features">
                          {data.whyCialfo}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-principals"
                        >
                          {data.forPrincipals}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-counselors"
                        >
                          {data.forCounselors}
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
                          {data.forSuperintendents}
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
                        {data.resources}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://help.cialfo.co"
                          target="_blank"
                        >
                          {data.knowledgeBase}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://facebook.com/cialfo"
                          target="_blank"
                        >
                          {data.community}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="events">
                          {data.events}
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="pb-1 pt-1 font-weight-bold footerListGroupItem">
                        {data.team}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="about">
                          {data.aboutUs}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://blog.cialfo.co"
                          target="_blank"
                        >
                          {data.blog}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://angel.co/company/cialfo"
                          target="_blank"
                        >
                          {data.careers}
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
          <NavBar>
            <Nav>
              <Row>
                <Col>
                  <div className="pb-1 pt-1 subFooterItem">
                    <NavLink
                      className="footer-nav-link"
                      to="privacy-policy"
                    >
                      {data.privacy}
                    </NavLink>
                    <NavLink
                      className="footer-nav-link"
                      to="terms-and-conditions"
                    >
                      {data.termsOfService}
                    </NavLink>
                    <NavLink
                      className="footer-nav-link"
                      to="contact"
                    >
                      {data.contactUs}
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </Nav>
          </NavBar>
        </MediaQuery>
        {/* MOBILE FOOTER */}
        <MediaQuery query="(max-device-width: 1223px) and (min-width: 386px)">
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
                        {data.platform}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="features">
                          {data.whyCialfo}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-principals"
                        >
                          {data.forPrincipals}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-counselors"
                        >
                          {data.forCounselors}
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
                          {data.forSuperintendents}
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
                        {data.resources}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://help.cialfo.co"
                          target="_blank"
                        >
                          {data.knowledgeBase}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://facebook.com/cialfo"
                          target="_blank"
                        >
                          {data.community}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="events">
                          {data.events}
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="pb-1 pt-3 font-weight-bold footerListGroupItem">
                        {data.team}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="about">
                          {data.aboutUs}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://blog.cialfo.co"
                          target="_blank"
                        >
                          {data.blog}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://angel.co/company/cialfo"
                          target="_blank"
                        >
                          {data.careers}
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
              </Row>
            </Col>
          </NavBar>
          <NavBar>
            <Nav>
              <Row>
                <Col>
                  <div className="pb-1 pt-1 subFooterItem">
                    <NavLink
                      className="footer-nav-link"
                      to="privacy-policy"
                    >
                      {data.privacy}
                    </NavLink>
                    <NavLink
                      className="footer-nav-link"
                      to="terms-and-conditions"
                    >
                      {data.termsOfService}
                    </NavLink>
                    <NavLink
                      className="footer-nav-link"
                      to="contact"
                    >
                      {data.contactUs}
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </Nav>
          </NavBar>
        </MediaQuery>
        <MediaQuery query="(max-width: 385px)">
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
                        {data.platform}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="features">
                          {data.whyCialfo}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-principals"
                        >
                          {data.forPrincipals}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink
                          className="footer-nav-link"
                          to="solutions-counselors"
                        >
                          {data.forCounselors}
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
                          {data.forSuperintendents}
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
                        {data.resources}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://help.cialfo.co"
                          target="_blank"
                        >
                          {data.knowledgeBase}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://facebook.com/cialfo"
                          target="_blank"
                        >
                          {data.community}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="events">
                          {data.events}
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
                <Col>
                  <Nav>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="pb-1 pt-3 font-weight-bold footerListGroupItem">
                        {data.team}
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <NavLink className="footer-nav-link" to="about">
                          {data.aboutUs}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://blog.cialfo.co"
                          target="_blank"
                        >
                          {data.blog}
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                        <a
                          className="footer-nav-link"
                          href="https://angel.co/company/cialfo"
                          target="_blank"
                        >
                          {data.careers}
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
              </Row>
            </Col>
          </NavBar>
          <NavBar>
            <Nav className="pb-1 pt-1 w-100 justify-content-between subFooterItem">
              {/* <Row>
                <Col> */}
                  <NavLink
                    className="footer-nav-link"
                    to="privacy-policy"
                  >
                    {data.privacy}
                  </NavLink>
                  <NavLink
                    className="footer-nav-link"
                    to="terms-and-conditions"
                  >
                    {data.termsOfService}
                  </NavLink>
                  <NavLink
                    className="footer-nav-link"
                    to="contact"
                  >
                    {data.contactUs}
                  </NavLink>
                {/* </Col>
              </Row> */}
            </Nav>
          </NavBar>
        </MediaQuery>
      </div>
    );
  }
}

export default withRouter(Footer);
