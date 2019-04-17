import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import HomePartnerImages from "./home/HomePartnerImages";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player";
import "./home/Home.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
  });

  componentDidMount() {
    this.fetchHomeContent().then(this.setHomeContent);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchHomeContent().then(this.setHomeContent);
    }
  }

  getDemo = () => {
    console.log("hey");
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
    console.log(this.state);
    return (
      <Container>
        <Row className="top_row">
          <Col>
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
              <Container>
                <Form>
                  <Form.Group>
                    <Row>
                      <Col className="homePageHeaderEmailForm" xs={8}>
                        <Form.Control
                          className="primary_font homePageHeaderEmailFormText"
                          type="email"
                          plaintext
                          placeholder={
                            this.state.homePageHeaderEmailPlaceholderText
                          }
                        />
                      </Col>
                      <Col className="homePageHeaderEmailSubmitButton homePageHeaderEmailForm">
                        <p
                          className="primary_font btn-lg homePageHeaderEmailFormText"
                          variant="link"
                          type="submit"
                          onClick={this.getDemo}
                        >
                          {this.state.homePageHeaderEmailSubmitButtonText}
                        </p>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Container>
            </Row>
          </Col>
          <Col className="homePageHeaderProductImage">
            <img src={this.state.homePageHeaderProductImage} />
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
            <img src={this.state.homePageFeaturesSendDocumentImage} />
          </Col>
          <Col>
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
              <p className="secondary_font homePageFeaturesSendDocumentLinkText">
                {this.state.homePageFeaturesSendDocumentLinkText}
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="featureRows">
          <Col>
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
              <p className="secondary_font homePageFeaturesLeverageLinkText">
                {this.state.homePageFeaturesLeverageLinkText}
              </p>
            </Row>
          </Col>
          <Col className="homePageFeaturesImage homePageFeaturesImageBackgroundReverse">
            <img src={this.state.homePageFeaturesLeverageImage} />
          </Col>
        </Row>
        <Row className="featureRows">
          <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
            <img src={this.state.homePageFeaturesDiscoverImage} />
          </Col>
          <Col>
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
              <p className="secondary_font homePageFeaturesDiscoverLinkText">
                {this.state.homePageFeaturesDiscoverLinkText}
              </p>
            </Row>
          </Col>
        </Row>
        <Container className="homePageVideoCaseStudy">
          <Row className="homePageVideoCaseStudyTitle">
            <h1 className="primary_font">
              {this.state.homePageVideoCaseStudyTitle}
            </h1>
          </Row>
          <Row className="homePageVideoCaseStudyVideoEmbed">
            <ReactPlayer url={this.state.homePageVideoCaseStudyVideoEmbed} />
          </Row>
          <Row className="homePagePoweredByOurPartnersTitle">
            <h1 className="primary_font">
              {this.state.homePagePoweredByOurPartnersTitle}
            </h1>
          </Row>
        </Container>
        <HomePartnerImages
          className="homePartnerImages"
          partnerImages={this.state.homePagePoweredByOurPartnersPartners}
        />
      </Container>
    );
  }
}

export default Home;
