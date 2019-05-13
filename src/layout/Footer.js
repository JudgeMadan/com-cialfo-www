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
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  fetchNavBar = () =>
    this.client.getEntries({
      content_type: "footer",
      locale: this.props.locale
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
    if (prevProps.locale !== this.props.locale) {
      this.fetchNavBar().then(this.setNavBar);
    }
  }

  render() {
    return (
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
                    {this.state.whyCialfo}
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
                  <ListGroup.Item className="pb-3 pt-1 footerListGroupItem">
                    {this.state.forITTeams}
                  </ListGroup.Item>
                  <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                    {this.state.cialfoVsBridgeU}
                  </ListGroup.Item>
                  <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                    {this.state.cialfoVsNaviance}
                  </ListGroup.Item>
                  <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                    {this.state.cialfoVsMaia}
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
                    <NavLink className="footer-nav-link nav-link" to="/events">
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
                    <NavLink className="footer-nav-link nav-link" to="/about">
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
          </Row>
        </Col>
      </NavBar>
    );
  }
}

export default Footer;
