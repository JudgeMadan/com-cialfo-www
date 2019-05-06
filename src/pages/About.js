import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutByTheNumbers from "./about/AboutByTheNumbers";
import AboutLeadershipTeam from "./about/AboutLeadershipTeam";
import AboutPartners from "./about/AboutPartners";
import MobileAboutPartners from "./about/MobileAboutPartners";
import AboutCounselors from "./about/AboutCounselors";
import AboutBusinessAdvisors from "./about/AboutBusinessAdvisors";
import AboutCialfoOffices from "./about/AboutCialfoOffices";
import MediaQuery from "react-responsive";
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
    return (
      <Container className="aboutPage">
        {/* FULL SCREEN HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="aboutPageTitle">
            <Container>
              <Row>
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
            </Container>
          </Row>
        </MediaQuery>
        {/* MOBILE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row>
            <Container>
              <img
                className="mobile-hero-image"
                src={this.state.aboutPageHeaderImage}
              />
              <Row className="mobile-top-row-header-container">
                <h1 className="primary_font aboutPageHeaderTitle mobile_top_row_header">
                  {this.state.aboutPageHeaderTitle}
                </h1>
              </Row>
              <Row className="mobile-top-row-header-container">
                <h2 className="secondary_font mobile_top_row_header">
                  {this.state.aboutPageHeaderSubtitle}
                </h2>
              </Row>
            </Container>
          </Row>
        </MediaQuery>
        <div className="full-width-light-blue">
          <Row className="center-in-row light-blue-background pt-5">
            <h1 className="primary_font">{this.state.aboutPageNumbersTitle}</h1>
          </Row>
          <Row className="by-the-numbers light-blue-background">
            <AboutByTheNumbers
              byTheNumbers={this.state.aboutPageNumbersArray}
            />
          </Row>
        </div>
        {/* FULL SCREEN ABOUT WHO WE ARE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="full-width-dark-blue">
            <Row className="dark-blue-background">
              <Col className="who-we-are-image-container">
                <img
                  className="about-page-who-we-are-image"
                  src={this.state.aboutPageWhoWeAreImage}
                />
              </Col>
              <Col className="aboutPageWhoWeAreContentContainer">
                <Row>
                  <p className="aboutPageWhoWeAreContent">
                    {this.state.aboutPageWhoWeAreContent}
                  </p>
                </Row>
              </Col>
            </Row>
          </div>
        </MediaQuery>
        {/* MOBILE WHO WE ARE */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="dark-blue-background">
            {/* <Col className="who-we-are-image-container"> */}
            <div className="mobile-who-we-are-image-container">
              <img
                className="mobile-about-page-who-we-are-image"
                src={this.state.aboutPageWhoWeAreImage}
              />
            </div>
            {/* </Col> */}
            {/* <Col className="aboutPageWhoWeAreContentContainer"> */}
            <Row>
              <p className="mobile-aboutPageWhoWeAreContent">
                {this.state.aboutPageWhoWeAreContent}
              </p>
            </Row>
            {/* </Col> */}
          </Row>
        </MediaQuery>
        {/* Full Screen LeadershipTitle */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="center-in-row pt-5">
            <h1 className="primary_font">
              {this.state.aboutPageLeadershipTitle}
            </h1>
          </Row>
        </MediaQuery>
        {/* Mobile Screen LeadershipTitle */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="center-in-row pt-5">
            <h1 className="primary_font mobile_top_row_header">
              {this.state.aboutPageLeadershipTitle}
            </h1>
          </Row>
        </MediaQuery>
        <Row className="center-in-row aboutPageLeadershipTeam">
          <AboutLeadershipTeam
            leadershipTeam={this.state.aboutPageLeadershipLeaders}
          />
        </Row>
        <div className="full-width-light-blue">
          <Row className="center-in-row light-blue-background pt-5">
            <Container className="partners pb-5">
              <Row className="center-in-row partnersTitle light-blue-background pb-5">
                <h1 className="primary_font light-blue-background">
                  {this.state.aboutPagePartnersTitle}
                </h1>
                <h1 className="secondary_font">
                  {this.state.aboutPagePartnersSubtitle}
                </h1>
              </Row>
              <Row className="aboutPartners light-blue-background">
                {/* MOBILE ABOUT PARTNERS  */}
                <MediaQuery query="(max-device-width: 1223px)">
                  <MobileAboutPartners
                    partners={this.state.aboutPagePartnersPartners}
                  />
                </MediaQuery>
                {/* FULL SCREEN ABOUT PARTNERS */}
                <MediaQuery query="(min-device-width: 1224px)">
                  <AboutPartners
                    partners={this.state.aboutPagePartnersPartners}
                  />
                </MediaQuery>
              </Row>
            </Container>
          </Row>
        </div>
        <Row className="center-in-row pt-5">
          <h1 className="primary_font">
            {this.state.aboutPageCounselorsTitle}
          </h1>
        </Row>
        <Row className="pb-5">
          <Container>
            <AboutCounselors
              counselors={this.state.aboutPageCounselorsCounselors}
            />
          </Container>
        </Row>
        <div className="full-width-light-blue">
          <Row className="light-blue-background center-in-row pt-5">
            <h1 className="primary_font">
              {this.state.aboutPageBusinessAdvisorsTitle}
            </h1>
          </Row>
          <Row className="light-blue-background pb-5">
            <Container>
              <AboutBusinessAdvisors
                businessAdvisors={this.state.aboutPageBusinessAdvisorsAdvisors}
              />
            </Container>
          </Row>
        </div>
        <div className="full-width-near-black">
          <AboutCialfoOffices
            cialfoOffices={this.state.aboutPageOfficesLocations}
          />
        </div>
      </Container>
    );
  }
}

export default About;
