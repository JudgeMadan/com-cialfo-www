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
import EventsSubfooter from "./events/EventsSubfooter";
import CialfoEventsObject from "./events/CialfoEventsObject";
import CialfoSessionsObject from "./events/CialfoSessionsObject";
import "./about/About.css";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
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
    const aboutContent = response.items;
    let filteredaboutContent = aboutContent.filter(
      aboutContent => aboutContent.fields.pageType === "eventsPage"
    );
    let filteredaboutContentFields = filteredaboutContent[0].fields;
    for (let key in filteredaboutContentFields) {
      if (typeof filteredaboutContentFields[key] === "string") {
        this.setState({
          [key]: filteredaboutContentFields[key]
        });
      } else if (Array.isArray(filteredaboutContentFields[key])) {
        this.setState({
          [key]: filteredaboutContentFields[key]
        });
      } else {
        this.setState({
          [key]: filteredaboutContentFields[key].fields.file.url
        });
      }
    }
  };

  render() {
    console.log(this.state);
    return (
      <Container>
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
        <EventsSubfooter
          img={this.state.eventsSubfooterImg}
          title={this.state.eventsSubfooterQuoteTitle}
          quote={this.state.eventsSubfooterQuote}
        />
        <div>
          <Row className=" center-in-row pt-5">
            <h1 className="primary_font">
              {this.state.eventsCialfoEventsTitle}
            </h1>
            <p className="primary_font">{this.state.eventsCialfoEventsBlurb}</p>
          </Row>
          <Row className=" pb-5">
            <Container>
              <CialfoEventsObject
                events={this.state.aboutPageLeadershipLeaders}
              />
            </Container>
          </Row>
        </div>
        <div className="full-width-light-blue">
          <Row className="light-blue-background center-in-row pt-5">
            <h1 className="primary_font">
              {this.state.eventsCialfoSessionsTitle}
            </h1>
            <p className="primary_font">
              {this.state.eventsCialfoSessionsBlurb}
            </p>
          </Row>
          <Row className="light-blue-background pb-5">
            <Container>
              <CialfoSessionsObject
                events={this.state.aboutPageCounselorsCounselors}
              />
            </Container>
          </Row>
        </div>
        <Row className="center-in-row partnersTitle light-blue-background pb-5">
          <h1 className="primary_font light-blue-background">
            {this.state.aboutPagePartnersTitle}
          </h1>
          <AboutPartners partners={this.state.aboutPagePartnersPartners} />
        </Row>
      </Container>
    );
  }
}

export default Events;
