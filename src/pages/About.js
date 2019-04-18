import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutByTheNumbers from "./about/AboutByTheNumbers";
import AboutLeadershipTeam from "./about/AboutLeadershipTeam";
import AboutPartners from "./about/AboutPartners";
import AboutCounselors from "./about/AboutCounselors";
import AboutBusinessAdvisors from "./about/AboutBusinessAdvisors";
import AboutCialfoOffices from "./about/AboutCialfoOffices";
import "./about/About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
  });

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchAboutContent().then(this.setAboutContent);
    }
  }

  componentDidMount() {
    this.fetchAboutContent().then(this.setAboutContent);
  }

  fetchAboutContent = () =>
    this.client.getEntries({
      content_type: "about",
      locale: this.props.locale
    });

  setAboutContent = response => {
    const aboutContent = response.items[0].fields;
    for (let key in aboutContent) {
      if (typeof aboutContent[key] === "string") {
        this.setState({
          [key]: aboutContent[key]
        });
      } else if (Array.isArray(aboutContent[key])) {
        this.setState({
          [key]: aboutContent[key]
        });
      } else {
        this.setState({
          [key]: aboutContent[key].fields.file.url
        });
      }
    }
  };

  render() {
    console.log(this.props.locale);
    return (
      <Container>
        <Row className="aboutPageTitle">
          <Col className="aboutPageHeaderText">
            <Row>
              <h1 className="primary_font aboutPageHeaderTitle">
                {this.state.aboutPageHeaderTitle}
              </h1>
            </Row>
            <Row>
              <h2 className="secondary_font">
                {this.state.aboutPageHeaderSubtitle}
              </h2>
            </Row>
          </Col>
          <Col>
            <img src={this.state.aboutPageHeaderImage} />
          </Col>
        </Row>
        <Row className="byTheNumbersTitle">
          <h1 className="primary_font">{this.state.aboutPageNumbersTitle}</h1>
        </Row>
        <AboutByTheNumbers byTheNumbers={this.state.aboutPageNumbersArray} />
        <Row>
          <Col className="aboutPageWhoWeAreImage">
            <img
              className="aboutPageWhoWeAreImage"
              src={this.state.aboutPageWhoWeAreImage}
            />
          </Col>
          <Col>
            <Row>
              <p>{this.state.aboutPageWhoWeAreContent}</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <h1 className="primary_font">
            {this.state.aboutPageLeadershipTitle}
          </h1>
        </Row>
        <AboutLeadershipTeam
          leadershipTeam={this.state.aboutPageLeadershipLeaders}
        />
        <Row>
          <h1 className="primary_font">{this.state.aboutPagePartnersTitle}</h1>
        </Row>
        <AboutPartners partners={this.state.aboutPagePartnersPartners} />
        <Row>
          <h1 className="primary_font">
            {this.state.aboutPageCounselorsTitle}
          </h1>
        </Row>
        <AboutCounselors
          counselors={this.state.aboutPageCounselorsCounselors}
        />
        <Row>
          <h1 className="primary_font">
            {this.state.aboutPageBusinessAdvisorsTitle}
          </h1>
        </Row>
        <AboutBusinessAdvisors
          businessAdvisors={this.state.aboutPageBusinessAdvisorsAdvisors}
        />
        <Row>
          <h1 className="primary_font">{this.state.aboutPageOfficesTitle}</h1>
        </Row>
        <AboutCialfoOffices
          cialfoOffices={this.state.aboutPageOfficesLocations}
        />
      </Container>
    );
  }
}

export default About;
