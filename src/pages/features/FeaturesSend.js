import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import "./Features.css";
import FeaturesSubfooter from "./FeaturesSubfooter";
import MediaQuery from "react-responsive";
import Oval from "../../img/Oval.svg";
import Line from "../../img/Line.svg";
import PartnerImages from "../PartnerImages";
import MobilePartnerImages from "../MobilePartnerImages";
import Pointer from "../../img/Pointer.svg";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import { withRouter } from "react-router-dom";

class FeaturesSend extends React.Component {
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
    this.fetchFeaturesSendingPage().then(this.setFeaturesSendingPage);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.fetchFeaturesSendingPage().then(this.setFeaturesSendingPage);
    }
  }

  fetchFeaturesSendingPage = () => {
    return this.client.getEntries({
      content_type: "featuresSendingPage",
      locale: this.props.match.params.locale
    });
  };

  setFeaturesSendingPage = response => {
    const sendingPageContent = response.items[0].fields;
    for (let key in sendingPageContent) {
      if (typeof sendingPageContent[key] === "string") {
        this.setState({
          [key]: sendingPageContent[key]
        });
      } else if (Array.isArray(sendingPageContent[key])) {
        this.setState({
          [key]: sendingPageContent[key].map(test => test.fields.file.url)
        });
      } else {
        this.setState({
          [key]: sendingPageContent[key].fields.file.url
        });
      }
    }
  };

  render() {
    return (
      <Container className="featuresSendPage">
        {/* FULL SCREEN PAGE HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="titleContainer">
            <h1 className="primary_font">{this.state.sendTitle}</h1>
          </Row>
          <Row className="featuresVideoEmbed">
            <div>
              <img className="oval" src={Oval} />
              <img className="line" src={Line} />
              <ReactPlayer
                className="video"
                width="800px"
                height="488px"
                url={this.state.sendVideo}
              />
            </div>
          </Row>
        </MediaQuery>
        {/* MOBILE PAGE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="titleContainer">
            <h1 className="primary_font">{this.state.sendTitle}</h1>
          </Row>
          <Row className="mobile-featuresVideoEmbed">
            <div>
              <img className="oval" src={Oval} />
              <ReactPlayer
                className="video"
                width="345px"
                height="194px"
                url={this.state.sendVideo}
              />
            </div>
          </Row>
        </MediaQuery>
        {/* FULL SCREEN FEATURE ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row>
            <Col className="featureImage">
              <img
                className="feature-send-portal-left-align-light-blue-rectangle"
                src={ThinLightBlueRectangle}
              />
            </Col>
            <Col className="featureSubSectionTextAlign">
              <Container>
                <Row>
                  <Col>
                    <h1 className="primary_font">
                      {this.state.sendPortalTitle}
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h1 className="secondary_font">
                      <img src={Pointer} />
                      &nbsp;
                      {this.state.sendPortalBlurb}
                    </h1>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </MediaQuery>
        {/* MOBILE FEATURE ROW */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border my-5 px-4">
            <Row className="center-in-row px-3">
              <h1 className="primary_font">{this.state.sendPortalTitle}</h1>
            </Row>
            <Row className="mb-5 px-3">
              <h1 className="secondary_font">
                <img src={Pointer} />
                &nbsp;
                {this.state.sendPortalBlurb}
              </h1>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL SCREEN TRANSCRIPT ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row>
            <Col className="featureSubSectionTextAlign">
              <Container>
                <Row>
                  <Col>
                    <h1 className="primary_font">
                      {this.state.sendTranscriptTitle}
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h1 className="secondary_font">
                      <img src={Pointer} />
                      &nbsp;
                      {this.state.sendTranscriptBlurb}
                    </h1>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="featureImage">
              <img
                className="feature-send-portal-right-align-light-blue-rectangle"
                src={ThinLightBlueRectangle}
              />
            </Col>
          </Row>
        </MediaQuery>
        {/* MOBILE TRANSCRIPT ROW */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border my-5 px-4">
            <Row className="center-in-row px-3">
              <h1 className="primary_font">{this.state.sendTranscriptTitle}</h1>
            </Row>
            <Row className="mb-5 px-3">
              <h1 className="secondary_font">
                <img src={Pointer} />
                &nbsp;
                {this.state.sendTranscriptBlurb}
              </h1>
            </Row>
          </Container>
        </MediaQuery>
        <Row />
        {/* FULL WIDTH PARTNERS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="featureSendPartnersTitle">
            <div className="full-width-light-blue">
              <PartnerImages
                locale={this.props.locale}
                className="partnerImages"
                partnerImages={this.state.sendPartnersArray}
                accessToken={this.props.accessToken}
                space={this.props.space}
                title={this.state.sendPartnersTitle}
              />
            </div>
          </Row>
        </MediaQuery>
        {/* MOBILE PARTNERS */}
        <MediaQuery query="(max-device-width: 1223px)">
          {/* <Container className="mb-5"> */}
          <MobilePartnerImages
            locale={this.props.locale}
            className="partnerImages"
            partnerImages={this.state.sendPartnersArray}
            accessToken={this.props.accessToken}
            space={this.props.space}
            title={this.state.sendPartnersTitle}
          />
          {/* </Container> */}
        </MediaQuery>
        {/* FEATURES SUBFOOTER ONLY ON FULL SCREEN */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row>
            <FeaturesSubfooter
              img={this.state.sendFooterImage}
              quote={this.state.sendFooterQuote}
              quoteAuthor={this.state.sendingFooterAuthor}
            />
          </Row>
        </MediaQuery>
      </Container>
    );
  }
}
export default withRouter(FeaturesSend);
