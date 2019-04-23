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
import Screen from "./home/Screen.png";
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
    console.log(this.props);
    return (
      <div className="homePageContainer">
        <Row className="top_row">
          <Col className="top_row_left_col">
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
            <img src={Screen} />
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
                <p className="secondary_font homePageFeaturesSendDocumentLinkText">
                  {this.state.homePageFeaturesSendDocumentLinkText}
                </p>
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
                <p className="secondary_font homePageFeaturesLeverageLinkText">
                  {this.state.homePageFeaturesLeverageLinkText}
                </p>
              </Row>
            </div>
          </Col>
          <Col className="homePageFeaturesImage homePageFeaturesImageBackgroundReverse">
            <img src={Screen} />
          </Col>
        </Row>
        <Row className="featureRows">
          <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
            <img src={Screen} />
          </Col>
          <Col className="homePageFeaturesText">
            <div className="homePageFeaturesRightSideTextObject container-fluid">
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
      </div>
    );
  }
}

export default Home;
