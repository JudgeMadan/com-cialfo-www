import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player";
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
      } else {
        this.setState({
          [key]: homeContent[key].fields.file.url
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              <h1>{this.state.homePageHeaderTitle}</h1>
            </Row>
            <Row>
              <Form>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Control
                        type="email"
                        placeholder={
                          this.state.homePageHeaderEmailPlaceholderText
                        }
                      />
                    </Col>
                    <Col>
                      <Button variant="primary" type="submit">
                        {this.state.homePageHeaderEmailSubmitButtonText}
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Row>
          </Col>
          <Col>
            <img src={this.state.homePageHeaderProductImage} />
          </Col>
        </Row>
        <Row>
          <h1>{this.state.homePageSchoolTestimonialsTitle}</h1>
        </Row>
        <HomeMarquee />
        <Row>
          <Col>
            <img src={this.state.homePageFeaturesSendDocumentImage} />
          </Col>
          <Col>
            <Row>
              <h1>{this.state.homePageFeaturesSendDocumentTitle}</h1>
            </Row>
            <Row>
              <p>{this.state.homePageFeaturesSendDocumentBlurb}</p>
            </Row>
            <Row>{this.state.homePageFeaturesSendDocumentLinkText}</Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <h1>{this.state.homePageFeaturesLeverageTitle}</h1>
            </Row>
            <Row>
              <p>{this.state.homePageFeaturesLeverageBlurb}</p>
            </Row>
            <Row>
              <p>{this.state.homePageFeaturesLeverageLinkText}</p>
            </Row>
          </Col>
          <Col>
            <img src={this.state.homePageFeaturesLeverageImage} />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={this.state.homePageFeaturesDiscoverImage} />
          </Col>
          <Col>
            <Row>
              <h1>{this.state.homePageFeaturesDiscoverTitle} </h1>
            </Row>
            <Row>
              <p>{this.state.homePageFeaturesDiscoverBlurb}</p>
            </Row>
            <Row>
              <p>{this.state.homePageFeaturesDiscoverLinkText}</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <ReactPlayer url={this.state.homePageVideoCaseStudyVideoEmbed} />
        </Row>
      </Container>
    );
  }
}

export default Home;
