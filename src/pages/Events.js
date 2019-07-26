import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutPartners from "./about/AboutPartners";
import EventsSubfooter from "./events/EventsSubfooter";
import MobileEventsSubfooter from "./events/MobileEventsSubfooter";
import CialfoEventsObject from "./events/CialfoEventsObject";
import MobileCialfoEventsObject from "./events/MobileCialfoEventsObject";
import MobileCialfoSessionsObject from "./events/MobileCialfoSessionsObject";
import CialfoSessionsObject from "./events/CialfoSessionsObject";
import Line from "../img/Line.svg";
import BlueStroke10 from "../img/BlueStroke10.svg";
import Oval from "../img/Oval.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import "./events/Events.css";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  setSpace = () => {
    return this.props.setSpace(this.props.match.params.space);
  };

  setAccessToken = () => {
    return this.props.setAccessToken(this.props.match.params.space);
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken(),
    environment: this.props.environment
  });

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.fetchAboutContent().then(this.setAboutContent);
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.fetchAboutContent().then(this.setAboutContent);
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

  fetchAboutContent = () =>
    this.client.getEntries({
      content_type: "about",
      locale: this.props.match.params.locale
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
    return (
      <Container>
        {/* FULL SCREEN TOP ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
          {this.state.width > 1000 && (
            <Row className="aboutPageTitle">
              <Container>
                <Row>
                  <Col className="top_row_left_col events-header-text">
                    <div>
                      <Row>
                        <h1 className="primary_font left-side-header-title left-side-header-title-large-font">
                          {this.state.aboutPageHeaderTitle}
                        </h1>
                      </Row>
                      <Row>
                        <h2 className="secondary_font left-side-header-blurb">
                          {this.state.aboutPageHeaderSubtitle}
                        </h2>
                      </Row>
                    </div>
                  </Col>
                  <Col>
                    <img src={this.state.aboutPageHeaderImage} />
                  </Col>
                </Row>
              </Container>
            </Row>
          )}
          {this.state.width <= 1000 && (
            <Row className="small-eventPageTitle">
              <Container>
                <Row>
                  <img src={this.state.aboutPageHeaderImage} />
                </Row>
                <Row className="top_row_left_col events-header-text">
                  <Container className="mx-3">
                    <Row>
                      <h1 className="primary_font left-side-header-title left-side-header-title-large-font">
                        {this.state.aboutPageHeaderTitle}
                      </h1>
                    </Row>
                    <Row>
                      <h2 className="secondary_font left-side-header-blurb">
                        {this.state.aboutPageHeaderSubtitle}
                      </h2>
                    </Row>
                  </Container>
                </Row>
              </Container>
            </Row>
          )}
        </MediaQuery>
        {/* MOBILE TOP ROW */}
        <MediaQuery query="(max-device-width: 1223px)">
          {/* <Row className="aboutPageTitle"> */}
          <Container className="center-in-row mobile-events-bottom-border pb-5 mb-5">
            <Row className="center-in-row">
              <img
                className="mobile-events-hero-image"
                src={this.state.aboutPageHeaderImage}
              />
            </Row>
            <Row className="center-in-row">
              <h1 className="primary_font left-side-header-title left-side-header-title-large-font mobile-events-header-text">
                {this.state.aboutPageHeaderTitle}
              </h1>
            </Row>
            <Row className="center-in-row">
              <h2 className="mx-3 secondary_font left-side-header-blurb mobile-events-header-text">
                {this.state.aboutPageHeaderSubtitle}
              </h2>
            </Row>
          </Container>
          {/* </Row> */}
        </MediaQuery>
        {/* FULL SCREEN TOP ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
          <EventsSubfooter
            img={this.state.eventsSubfooterImg}
            title={this.state.eventsSubfooterQuoteTitle}
            quote={this.state.eventsSubfooterQuote}
          />
        </MediaQuery>
        {/* MOBILE EVENT SUBFOOTER
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileEventsSubfooter
            img={this.state.eventsSubfooterImg}
            title={this.state.eventsSubfooterQuoteTitle}
            quote={this.state.eventsSubfooterQuote}
          />
        </MediaQuery> */}
        {/* FULL SCREEN EVENTS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="full-width-light-blue">
            <Row className="center-in-row events-cialfo-events-sessions-top-row">
              <h1 className="primary_font">
                {this.state.eventsCialfoEventsTitle}
              </h1>
            </Row>
            <Row className="events-subtitle center-in-row pb-5">
              <p className="secondary_font">
                {this.state.eventsCialfoEventsBlurb}
              </p>
            </Row>
            <Row className="events-cialfo-events-sessions-bottom-row ">
              <Container>
                <CialfoEventsObject
                  events={this.state.aboutPageLeadershipLeaders}
                />
              </Container>
            </Row>
          </div>
        </MediaQuery>
        {/* MOBILE EVENTS */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container>
            <Row className="center-in-row events-cialfo-events-sessions-top-row light-blue-background">
              <h1 className="primary_font">
                {this.state.eventsCialfoEventsTitle}
              </h1>
            </Row>
            <Row className="events-subtitle center-in-row px-3 light-blue-background">
              <p className="secondary_font">
                {this.state.eventsCialfoEventsBlurb}
              </p>
            </Row>
            <Row className="events-cialfo-events-sessions-bottom-row light-blue-background">
              <Container>
                <MobileCialfoEventsObject
                  events={this.state.aboutPageLeadershipLeaders}
                />
              </Container>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL SCREEN CIALFO SESSIONS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Row className="center-in-row events-cialfo-events-sessions-top-row">
              <h1 className="primary_font">
                {this.state.eventsCialfoSessionsTitle}
              </h1>
            </Row>
            <Row className="events-subtitle center-in-row pb-5">
              <p className="secondary_font">
                {this.state.eventsCialfoSessionsBlurb}
              </p>
            </Row>
            <Row className="events-cialfo-events-sessions-bottom-row ">
              <Container>
                <img className="events-oval" src={Oval} />
                <img className="events-blue-stroke-10" src={BlueStroke10} />
                <CialfoSessionsObject
                  events={this.state.aboutPageCounselorsCounselors}
                />
              </Container>
            </Row>
          </div>
        </MediaQuery>
        {/* MOBILE CIALFO SESSIONS */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-events-bottom-border mobile-events-top-border my-5">
            <Row className="center-in-row mt-5">
              <h1 className="primary_font">
                {this.state.eventsCialfoSessionsTitle}
              </h1>
            </Row>
            <Row className="events-subtitle center-in-row px-3">
              <p className="secondary_font">
                {this.state.eventsCialfoSessionsBlurb}
              </p>
            </Row>
            <Row className="pb-5">
              <Container>
                <MobileCialfoSessionsObject
                  events={this.state.aboutPageCounselorsCounselors}
                />
              </Container>
            </Row>
          </Container>
        </MediaQuery>
      </Container>
    );
  }
}

export default withRouter(Events);
