import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutPartners from "./about/AboutPartners";
import EventsSubfooter from "./events/EventsSubfooter";
import CialfoEventsObject from "./events/CialfoEventsObject";
import CialfoSessionsObject from "./events/CialfoSessionsObject";
import Line from "../img/Line.svg";
import BlueStroke10 from "../img/BlueStroke10.svg";
import Oval from "../img/Oval.svg";
import "./events/Events.css";

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
              <Col className="events-header-text">
                <Row>
                  <h1 className="primary_font events-header-title">
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
          <Row className="center-in-row">
            <h1 className="primary_font">
              {this.state.eventsCialfoEventsTitle}
            </h1>
          </Row>
          <Row className="events-subtitle center-in-row pb-5">
            <p className="secondary_font">
              {this.state.eventsCialfoEventsBlurb}
            </p>
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
          </Row>
          <Row className="events-subtitle center-in-row pb-5">
            <p className="secondary_font">
              {this.state.eventsCialfoSessionsBlurb}
            </p>
          </Row>
          <Row className="light-blue-background pb-5">
            <Container>
              <img className="events-oval" src={Oval} />
              <img className="events-blue-stroke-10" src={BlueStroke10} />
              <CialfoSessionsObject
                events={this.state.aboutPageCounselorsCounselors}
              />
            </Container>
          </Row>
        </div>
        <Row className="center-in-row events-partners-title pt-5">
          <h1 className="primary_font ">{this.state.aboutPagePartnersTitle}</h1>
        </Row>
        <Row className="center-in-row">
          <AboutPartners partners={this.state.aboutPagePartnersPartners} />
        </Row>
      </Container>
    );
  }
}

export default Events;
