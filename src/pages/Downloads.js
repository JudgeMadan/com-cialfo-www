import React from "react";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./home/Home.css";
import Oval from "../img/Oval.svg";
import Line from "../img/Line.svg";
import PlaceholderQR from "../img/PlaceholderQR.svg";
import DownloadLinksObject from "./downloads/DownloadLinksObject";
import HomePartnerImages from "./home/HomePartnerImages";
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
              <Col className="downloads-header-text">
                <Row>
                  <h1 className="primary_font events-header-title">
                    {this.state.headerTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">{this.state.headerBlurb}</p>
                </Row>
                <DownloadLinksObject
                  downloadLinks={this.state.headerDownloadLinks}
                  downloadLinksUrls={this.state.headerDownloadLinksUrls}
                />
              </Col>
              <Col>
                <img
                  className="downloads-header-img"
                  src={this.state.headerHeroImage}
                />
              </Col>
            </Row>
          </Container>
        </Row>
        <div className="full-width-light-blue">
          <Row className="center-in-row edi-title download-text">
            <h1 className="primary_font">{this.state.ediTitle}</h1>
          </Row>
          <Row className="center-in-row download-text">
            <h1 className="secondary_font">{this.state.ediBlurb}</h1>
          </Row>
          <Row className="center-in-row pt-3 pb-5 download-text5">
            <button className="edi_button">{this.state.ediButtonText}</button>
          </Row>
        </div>
        <div className="full-width-dark-blue ">
          <Row className="center-in-row edi-title download-text">
            <h1 className="primary_font white-text">{this.state.vpnTitle}</h1>
          </Row>
          <Row className="center-in-row download-text">
            <h1 className="secondary_font white-text">{this.state.vpnBlurb}</h1>
          </Row>
          <Row className="center-in-row pt-3 pb-5">
            <img src={PlaceholderQR} />
          </Row>
        </div>
        <Row className="center-in-row edi-title">
          <h1 className="primary_font">{this.state.partnersTitle}</h1>
        </Row>
        <HomePartnerImages partnerImages={this.state.partnersImages} />
      </Container>
    );
  }
}

export default Downloads;
