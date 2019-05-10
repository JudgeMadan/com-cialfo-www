import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./home/Home.css";
import Documents from "../img/home/CDocs.svg";
import ResearchImage from "../img/home/SchoolsOverview.svg";
import Reports from "../img/home/Reports.svg";
import Oval from "../img/Oval.svg";
import Line from "../img/Line.svg";
import DownloadLinksObject from "./downloads/DownloadLinksObject";
class Downloads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  componentDidMount() {
    this.fetchHomeContent().then(this.setHomeContent);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchHomeContent().then(this.setHomeContent);
    }
  }

  handleChange = e => {
    const fieldContent = e.target.value;
    this.props.sendEmailAddressToGetADemo(fieldContent);
  };

  fetchHomeContent = () =>
    this.client.getEntries({
      content_type: "downloads",
      locale: this.props.locale
    });

  setHomeContent = response => {
    const homeContent = response.items;
    let filteredhomeContent = homeContent.filter(
      homeContent => homeContent.fields.pageType === "downloadPage"
    );
    let filteredhomeContentFields = filteredhomeContent[0].fields;
    for (let key in filteredhomeContentFields) {
      if (typeof filteredhomeContentFields[key] === "string") {
        this.setState({
          [key]: filteredhomeContentFields[key]
        });
      } else if (Array.isArray(filteredhomeContentFields[key])) {
        if (typeof filteredhomeContentFields[key][0] === "string") {
          this.setState({
            [key]: filteredhomeContentFields[key]
          });
        } else {
          this.setState({
            [key]: filteredhomeContentFields[key].map(
              test => test.fields.file.url
            )
          });
        }
      } else {
        this.setState({
          [key]: filteredhomeContentFields[key].fields.file.url
        });
      }
    }
  };

  render() {
    return (
      <Container className="homePageContainer">
        <Row className="aboutPageTitle">
          <Container>
            <Row>
              <Col className="events-header-text">
                <Row>
                  <h1 className="primary_font events-header-title">
                    {this.state.headerTitle}
                  </h1>
                </Row>
                <Row>
                  <h2 className="secondary_font">{this.state.headerBlurb}</h2>
                </Row>
                <DownloadLinksObject
                  downloadLinks={this.state.headerDownloadLinks}
                  downloadLinksUrls={this.state.headerDownloadLinksUrls}
                />
              </Col>
              <Col>
                <img src={this.state.headerHeroImage} />
              </Col>
            </Row>
          </Container>
        </Row>
        {/* <EventsSubfooter
          img={this.state.eventsSubfooterImg}
          title={this.state.eventsSubfooterQuoteTitle}
          quote={this.state.eventsSubfooterQuote}
        /> */}
      </Container>
    );
  }
}

export default Downloads;