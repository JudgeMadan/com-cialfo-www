import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import NavBar from "react-bootstrap/Navbar";
import * as contentful from "contentful";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
  });

  fetchNavBar = () =>
    this.client.getEntries({
      content_type: "footer",
      locale: this.props.locale
    });

  setNavBar = response => {
    const footerContent = response.items[0].fields;
    console.log(footerContent);
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
    console.log(this.props.locale);
    return (
      <NavBar className="mt-5" sticky="bottom">
        <Col>
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
