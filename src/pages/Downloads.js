import React from "react";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./downloads/Downloads.css";
import Oval from "../img/Oval.svg";
import YellowStroke10 from "../img/YellowStroke10.svg";
import PlaceholderQR from "../img/PlaceholderQR.svg";
import DownloadLinksObject from "./downloads/DownloadLinksObject";
import MobileDownloadLinksObject from "./downloads/MobileDownloadLinksObject";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
class Downloads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setSpace = () => {
    if (this.props.match.params.space === "cn") {
      return this.props.spaces.cn.space;
    }
    if (this.props.match.params.space === "intl") {
      return this.props.spaces.intl.space;
    }
  };

  setAccessToken = () => {
    if (this.props.match.params.space === "cn") {
      return this.props.spaces.cn.accessToken;
    }
    if (this.props.match.params.space === "intl") {
      return this.props.spaces.intl.accessToken;
    }
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken()
  });

  componentDidMount() {
    this.fetchHomeContent().then(this.setHomeContent);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
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
      locale: this.props.match.params.locale
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
      <Container>
        {/* FULL SCREEN DOWNLOADS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="aboutPageTitle">
            <Container>
              <Row>
                <Col className="downloads-header-text">
                  <div>
                    <Row>
                      <h1 className="primary_font left-side-header-title left-side-header-title-large-font">
                        {this.state.headerTitle}
                      </h1>
                    </Row>
                    <Row>
                      <p className="secondary_font left-side-header-blurb">
                        {this.state.headerBlurb}
                      </p>
                    </Row>
                    <DownloadLinksObject
                      downloadLinks={this.state.headerDownloadLinks}
                      downloadLinksUrls={this.state.headerDownloadLinksUrls}
                    />
                  </div>
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
          <div className="full-width-light-blue pb-5">
            <Row className="center-in-row edi-title download-text">
              <h1 className="primary_font edi-title-text">
                {this.state.ediTitle}
              </h1>
            </Row>
            <Row className="center-in-row download-text">
              <h1 className="secondary_font">{this.state.ediBlurb}</h1>
            </Row>
            <Row className="center-in-row pt-3 pb-5 download-text5">
              <button className="edi_button">{this.state.ediButtonText}</button>
            </Row>
          </div>
          <div className="downloads-full-width-dark-blue downloads-vpn-dark-blue mb-5">
            <Row className="center-in-row edi-title download-text">
              <h1 className="primary_font white-text">{this.state.vpnTitle}</h1>
            </Row>
            <Row className="center-in-row download-text">
              <h1 className="secondary_font white-text">
                {this.state.vpnBlurb}
              </h1>
            </Row>
            <Row className="center-in-row pt-3 pb-5">
              <img className="downloads-oval" src={Oval} />
              <img
                className="downloads-yellow-stroke-10"
                src={YellowStroke10}
              />
              <img className="downloads-qr-code" src={PlaceholderQR} />
            </Row>
          </div>
          <Row className="mb-5" />
        </MediaQuery>
        {/* MOBILE DOWNLOADS */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row>
            <Container>
              <Row className="center-in-row">
                <div>
                  <img
                    className="mobile-downloads-header-img"
                    src={this.state.headerHeroImage}
                  />
                </div>
              </Row>
              <Row className="center-in-row text-align-center my-5 mx-3">
                <h1 className="primary_font left-side-header-title left-side-header-title-large-font">
                  {this.state.headerTitle}
                </h1>
              </Row>
              <Row className="center-in-row text-align-center mx-3">
                <p className="secondary_font left-side-header-blurb">
                  {this.state.headerBlurb}
                </p>
              </Row>
              <Row className="mt-3 mb-5 center-in-row">
                <MobileDownloadLinksObject
                  downloadLinks={this.state.headerDownloadLinks}
                  downloadLinksUrls={this.state.headerDownloadLinksUrls}
                />
              </Row>
            </Container>
            <Container className="center-in-row light-blue-background download-text">
              <div className="light-blue-background pt-5 mx-4 my-3">
                <h1 className="primary_font text-align-center mobile-edi-title-text">
                  {this.state.ediTitle}
                </h1>
              </div>
            </Container>
            <Container className="center-in-row download-text light-blue-background">
              <div className="light-blue-background mx-4 my-3">
                <h1 className="secondary_font">{this.state.ediBlurb}</h1>
              </div>
            </Container>
            <Container className="mobile-download-button-row light-blue-background pt-3 pb-5">
              <div>
                <button className="edi_button">
                  {this.state.ediButtonText}
                </button>
              </div>
            </Container>
            <Container className="center-in-row dark-blue-background download-text">
              <div className="dark-blue-background center-in-row pt-5">
                <h1 className="primary_font white-text">
                  {this.state.vpnTitle}
                </h1>
              </div>
            </Container>
            <Container className="center-in-row download-text dark-blue-background px-5">
              <h1 className="secondary_font white-text">
                {this.state.vpnBlurb}
              </h1>
            </Container>
            <Container className="mobile-download-button-row py-5 dark-blue-background">
              <img className="downloads-qr-code" src={PlaceholderQR} />
            </Container>
          </Row>
        </MediaQuery>
      </Container>
    );
  }
}

export default withRouter(Downloads);
