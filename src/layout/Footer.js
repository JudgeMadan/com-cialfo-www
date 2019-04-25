import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import NavBar from "react-bootstrap/Navbar";
import * as contentful from "contentful";
import Logo from "./Layout/Logo.svg";
import { Link } from "react-router-dom";
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
        className="mt-5 footer-background align-items-start justify-content-between footer"
        sticky="bottom"
      >
        {/* <Col>
          <Row className="small">
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item className="pb-1 pt-1 font-weight-bold footerListGroupItem">
                  {this.state.platform}
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  {this.state.whyCialfo}
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  {this.state.forPrincipals}
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  {this.state.forCounselors}
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
            </Col>
            <Col>
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
                  {this.state.events}
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  {this.state.partners}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item className="pb-1 pt-1 font-weight-bold footerListGroupItem">
                  {this.state.team}
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  {this.state.aboutUs}
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
            </Col>
          </Row>
        </Col> */}
        <Col className="justify-content-md-end">
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
