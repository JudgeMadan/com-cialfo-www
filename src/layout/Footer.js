import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import NavBar from "react-bootstrap/Navbar";
class Footer extends React.Component {
  render() {
    return (
      <NavBar className="mt-5" sticky="bottom">
        <Col>
          <Row className="small">
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item className="pb-1 pt-1 font-weight-bold footerListGroupItem">
                  Platform
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Why Cialfo
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  For Principals
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  For Counselors
                </ListGroup.Item>
                <ListGroup.Item className="pb-3 pt-1 footerListGroupItem">
                  For IT Teams
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Cialfo vs BridgeU
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Cialfo vs Naviance
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Cialfo vs Maia
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item className="font-weight-bold pt-1 pb-1 footerListGroupItem">
                  Resources
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Knowledge Base
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Community
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Cialfo Tips
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Events
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Partners
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item className="pb-1 pt-1 font-weight-bold footerListGroupItem">
                  Team
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  About Us
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Blog
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Media Kit
                </ListGroup.Item>
                <ListGroup.Item className="pb-1 pt-1 footerListGroupItem">
                  Careers
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-md-end">
            <p>Cialfo Logo</p>
          </Row>
        </Col>
      </NavBar>
    );
  }
}

export default Footer;
