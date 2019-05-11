import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import HomePartnerImages from "./home/HomePartnerImages";
import MobileHomePartnerImages from "./home/MobileHomePartnerImages";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./home/Home.css";
import Hero from "../img/home/iMacAndMobileMockup.png";
import Documents from "../img/home/CDocs.svg";
import ResearchImage from "../img/home/SchoolsOverview.svg";
import Reports from "../img/home/Reports.svg";
import Stroke10 from "../img/home/Stroke10.svg";
import LightBlueRectangle from "../img/LightBlueRectangle.svg";
import Oval from "../img/Oval.svg";
import Line from "../img/Line.svg";
import MediaQuery from "react-responsive";
import Container from "react-bootstrap/Container";
import PartnerImages from "./PartnerImages";
class Home extends React.Component {
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
      content_type: "homePageHeaderProductImage",
      locale: this.props.locale
    });

  setHomeContent = response => {
    const homeContent = response.items;
    let filteredhomeContent = homeContent.filter(
      homeContent => homeContent.fields.pageType === "homePage"
    );
    let filteredhomeContentFields = filteredhomeContent[0].fields;
    for (let key in filteredhomeContentFields) {
      if (typeof filteredhomeContentFields[key] === "string") {
        this.setState({
          [key]: filteredhomeContentFields[key]
        });
      } else if (Array.isArray(filteredhomeContentFields[key])) {
        this.setState({
          [key]: filteredhomeContentFields[key].map(
            test => test.fields.file.url
          )
        });
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
        {/* FULL SCREEN TOP ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="top_row">
            <Col className="top_row_left_col">
              <div>
                <Row>
                  <h1 className="primary_font homePageHeaderTitle">
                    {this.state.homePageHeaderTitle}
                  </h1>
                </Row>
                <Row>
                  <h1 className="secondary_font homePageHeaderBlurb">
                    {this.state.homePageHeaderBlurb}
                  </h1>
                </Row>
                <Row>
                  <Form className="get-a-demo-form">
                    <Form.Row className="email-form-container">
                      <Col xs={7} className="pt-1">
                        <Form.Control
                          className="primary_font email-form"
                          placeholder={
                            this.state.homePageHeaderEmailPlaceholderText
                          }
                          plaintext
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col>
                        <button
                          className=" primary_font get-a-demo-button"
                          type="submit"
                        >
                          <Link
                            className="primary_font get-a-demo-link"
                            to="/demo"
                          >
                            {this.state.homePageHeaderEmailSubmitButtonText}
                          </Link>
                        </button>
                      </Col>
                    </Form.Row>
                  </Form>
                </Row>
              </div>
            </Col>
            <Col className="homePageHeaderProductImage">
              <img className="homePageImg" src={Hero} />
            </Col>
          </Row>
        </MediaQuery>
        {/* MOBILE TOP ROW */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="mobile_top_row">
            <Col className="mobile_top_row_left_col">
              <div>
                <Row>
                  <h1 className="primary_font mobile_top_row_header">
                    {this.state.homePageHeaderTitle}
                  </h1>
                </Row>
                <Row>
                  <h1 className="secondary_font homePageHeaderBlurb mobile_top_row_header">
                    {this.state.homePageHeaderBlurb}
                  </h1>
                </Row>
                <Row className="mobile-email-form-container">
                  <Form>
                    <Form.Row>
                      <Col xs={7} className="pt-1">
                        <Form.Control
                          className="primary_font email-form"
                          placeholder={
                            this.state.homePageHeaderEmailPlaceholderText
                          }
                          plaintext
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col>
                        <button
                          className=" primary_font get-a-demo-button"
                          type="submit"
                        >
                          <Link
                            className="primary_font get-a-demo-link"
                            to="/demo"
                          >
                            {this.state.homePageHeaderEmailSubmitButtonText}
                          </Link>
                        </button>
                      </Col>
                    </Form.Row>
                  </Form>
                </Row>
              </div>
            </Col>
          </Row>
        </MediaQuery>
        {/* FULL SCREEN MARQUEE | NO MARQUEE ON MOBILE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="homePageSchoolTestimonialsTitle">
            <h1 className="primary_font">
              {this.state.homePageSchoolTestimonialsTitle}
            </h1>
          </Row>
          {/* keep div to permit overflow */}
          <div className="homeMarquee">
            <HomeMarquee
              locale={this.props.locale}
              accessToken={this.props.accessToken}
              space={this.props.space}
            />
          </div>
        </MediaQuery>
        {/* FULL SCREEN SEND DOCUMENTS FEATURE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="featureRows">
            <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
              <div>
                <img className="stroke-10" src={Stroke10} />
                <img
                  className="left-align-light-blue-background"
                  src={LightBlueRectangle}
                />
                <img className="homePageImg" src={Documents} />
              </div>
            </Col>
            <Col className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject">
                <Row>
                  <h1 className="primary_font">
                    {this.state.homePageFeaturesSendDocumentTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.homePageFeaturesSendDocumentBlurb}
                  </p>
                </Row>
                <Row>
                  <Link
                    className="homeFeatureLink homePageFeaturesSendDocumentLinkText"
                    to="/features/send"
                  >
                    {this.state.homePageFeaturesSendDocumentLinkText}
                  </Link>
                </Row>
              </div>
            </Col>
          </Row>
        </MediaQuery>
        {/* MOBILE SEND DOCUMENTS FEATURES */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="featureRows">
            <Row className="mobile-homePageFeaturesImage">
              <img className="mobile-homePageImg" src={Documents} />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject">
                <Row>
                  <h1 className="primary_font">
                    {this.state.homePageFeaturesSendDocumentTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.homePageFeaturesSendDocumentBlurb}
                  </p>
                </Row>
                <Row>
                  <Link
                    className="homeFeatureLink homePageFeaturesSendDocumentLinkText"
                    to="/features/send"
                  >
                    <p>{this.state.homePageFeaturesSendDocumentLinkText}</p>
                  </Link>
                </Row>
              </div>
            </Row>
          </Row>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="featureRows">
            <Col className="homePageFeaturesText">
              <div className="homePageFeaturesLeftSideTextObject">
                <Row>
                  <h1 className="primary_font">
                    {this.state.homePageFeaturesLeverageTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.homePageFeaturesLeverageBlurb}
                  </p>
                </Row>
                <Row>
                  <Link
                    className="homeFeatureLink homePageFeaturesLeverageLinkText"
                    to="/features/research"
                  >
                    {this.state.homePageFeaturesLeverageLinkText}
                  </Link>
                </Row>
              </div>
            </Col>
            <Col className="homePageFeaturesImage homePageFeaturesImageBackgroundReverse">
              <img className="homePageImg" src={ResearchImage} />
              <img
                className="right-align-light-blue-background"
                src={LightBlueRectangle}
              />
            </Col>
          </Row>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="featureRows">
            <Row className="mobile-homePageFeaturesImage">
              <img className="mobile-homePageImg" src={ResearchImage} />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject">
                <Row>
                  <h1 className="primary_font">
                    {this.state.homePageFeaturesLeverageTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.homePageFeaturesLeverageBlurb}
                  </p>
                </Row>
                <Row>
                  <Link
                    className="homeFeatureLink homePageFeaturesLeverageLinkText"
                    to="/features/send"
                  >
                    {this.state.homePageFeaturesLeverageLinkText}
                  </Link>
                </Row>
              </div>
            </Row>
          </Row>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="featureRows">
            <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
              <img className="homePageImg" src={Reports} />
              <img
                className="custom-left-align-light-blue-background"
                src={LightBlueRectangle}
              />
            </Col>
            <Col className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject">
                <Row>
                  <h1 className="primary_font">
                    {this.state.homePageFeaturesDiscoverTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.homePageFeaturesDiscoverBlurb}
                  </p>
                </Row>
                <Row>
                  <Link
                    className="homeFeatureLink homePageFeaturesDiscoverLinkText"
                    to="/features/documents"
                  >
                    {this.state.homePageFeaturesDiscoverLinkText}
                  </Link>
                </Row>
              </div>
            </Col>
          </Row>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="featureRows">
            <Row className="mobile-homePageFeaturesImage">
              <img className="mobile-homePageImg" src={Reports} />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject">
                <Row>
                  <h1 className="primary_font">
                    {this.state.homePageFeaturesDiscoverTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.homePageFeaturesDiscoverBlurb}
                  </p>
                </Row>
                <Row>
                  <Link
                    className="homeFeatureLink homePageFeaturesDiscoverLinkText"
                    to="/features/send"
                  >
                    {this.state.homePageFeaturesDiscoverLinkText}
                  </Link>
                </Row>
              </div>
            </Row>
          </Row>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="homePageVideoCaseStudy">
            <div className="partial-width-dark-blue">
              <Row className="homePageVideoCaseStudyTitle">
                <h1 className="primary_font white-font mobile-home-page-video-case-study-title">
                  {this.state.homePageVideoCaseStudyTitle}
                </h1>
              </Row>
              <Row className="homePageVideoCaseStudyVideoEmbed">
                <div>
                  <img className="oval" src={Oval} />
                  <img className="line" src={Line} />
                  <ReactPlayer
                    className="video"
                    width="800px"
                    height="448px"
                    url={this.state.homePageVideoCaseStudyVideoEmbed}
                  />
                </div>
              </Row>
            </div>
          </div>
          <PartnerImages
            locale={this.props.locale}
            className="partnerImages"
            partnerImages={this.state.homePagePoweredByOurPartnersPartners}
            accessToken={this.props.accessToken}
            space={this.props.space}
            title={this.state.homePagePoweredByOurPartnersTitle}
          />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1223px)">
          <div className="mobile-homePageVideoCaseStudy">
            <Row className="mobile-homePageVideoCaseStudyTitle">
              <h1 className="primary_font white-font">
                {this.state.homePageVideoCaseStudyTitle}
              </h1>
            </Row>
            <Row className="mobile-homePageVideoCaseStudyVideoEmbed">
              <div>
                <ReactPlayer
                  className="video"
                  width="375px"
                  height="210px"
                  url={this.state.homePageVideoCaseStudyVideoEmbed}
                />
              </div>
            </Row>
          </div>
          <MobileHomePartnerImages
            locale={this.props.locale}
            className="homePartnerImages"
            partnerImages={this.state.homePagePoweredByOurPartnersPartners}
            accessToken={this.props.accessToken}
            space={this.props.space}
            title={this.state.homePagePoweredByOurPartnersTitle}
          />
        </MediaQuery>
      </Container>
    );
  }
}

export default Home;
