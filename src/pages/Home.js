import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import HomePartnerImages from "./home/HomePartnerImages";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./home/Home.css";
import Hero from "./home/Hero.svg";
import Documents from "./home/CDocs.svg";
import ResearchImage from "./home/SchoolsOverview.svg";
import Reports from "./home/Reports.svg";
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
    const homeContent = response.items[0].fields;
    for (let key in homeContent) {
      if (typeof homeContent[key] === "string") {
        this.setState({
          [key]: homeContent[key]
        });
      } else if (Array.isArray(homeContent[key])) {
        this.setState({
          [key]: homeContent[key].map(test => test.fields.file.url)
        });
      } else {
        this.setState({
          [key]: homeContent[key].fields.file.url
        });
      }
    }
  };

  render() {
    return (
      <Container className="homePageContainer">
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
              <Row className="test">
                <Container>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                      <Row>
                        <Col className="email-form">
                          <Form.Control
                            className="primary_font email-form-text"
                            type="email"
                            onChange={this.handleChange}
                            plaintext
                            placeholder={
                              this.state.homePageHeaderEmailPlaceholderText
                            }
                          />
                        </Col>
                        <Col className="homePageHeaderEmailSubmitButton email-form">
                          <button
                            className=" primary_font get-a-demo-button"
                            type="submit"
                          >
                            <Link
                              className="primary_font get-a-demo-button"
                              to="/demo"
                            >
                              {this.state.homePageHeaderEmailSubmitButtonText}
                            </Link>
                          </button>
                        </Col>
                      </Row>
                    </Form.Group>
                  </Form>
                </Container>
              </Row>
            </div>
          </Col>
          <Col className="homePageHeaderProductImage">
            <img className="homePageImg" src={Hero} />
          </Col>
        </Row>
        <Row className="homePageSchoolTestimonialsTitle">
          <h1 className="primary_font">
            {this.state.homePageSchoolTestimonialsTitle}
          </h1>
        </Row>
        <Row className="homeMarquee">
          <HomeMarquee />
        </Row>
        <Row className="featureRows">
          <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
            <img className="homePageImg" src={Documents} />
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
          </Col>
        </Row>
        <Row className="featureRows">
          <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
            <img className="homePageImg" src={Reports} />
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
        <div className="homePageVideoCaseStudy">
          <Row className="homePageVideoCaseStudyTitle">
            <h1 className="primary_font">
              {this.state.homePageVideoCaseStudyTitle}
            </h1>
          </Row>
          <Row className="homePageVideoCaseStudyVideoEmbed">
            <ReactPlayer
              width="1000px"
              height="560px"
              url={this.state.homePageVideoCaseStudyVideoEmbed}
            />
          </Row>
        </div>
        <HomePartnerImages
          locale={this.props.locale}
          className="homePartnerImages"
          partnerImages={this.state.homePagePoweredByOurPartnersPartners}
        />
      </Container>
    );
  }
}

export default Home;
