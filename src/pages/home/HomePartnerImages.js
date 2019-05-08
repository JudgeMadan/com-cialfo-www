import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MediaQuery from "react-responsive";
import * as contentful from "contentful";
import "./Home.css";

class HomePartnerImages extends React.Component {
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

  fetchHomeContent = () =>
    this.client.getEntries({
      content_type: "homePageHeaderProductImage",
      locale: this.props.locale
    });

  setHomeContent = response => {
    const homeContent = response.items[0].fields;
    for (let key in homeContent) {
      if (key === "homePagePoweredByOurPartnersPartners") {
        this.setState({
          [key]: homeContent[key]
        });
      } else if (key === "homePagePoweredByOurPartnersTitle") {
        this.setState({
          [key]: homeContent[key]
        });
      }
    }
  };

  render() {
    const images = this.state.homePagePoweredByOurPartnersPartners;
    let imageObject;

    if (images) {
      imageObject = images.map(image => {
        return (
          <Col className="home-page-partner-image" key={image.sys.id}>
            <img className="homePartnerImages" src={image.fields.file.url} />
          </Col>
        );
      });
    }

    return (
      <div className="home-partners-image-container">
        <Container className="home-partners-image-content">
          <Row className="imageObjectTitle">
            <h1 className="primary_font ">
              {this.state.homePagePoweredByOurPartnersTitle}
            </h1>
          </Row>
          <Row className="imageObjectRow">{imageObject}</Row>
        </Container>
      </div>
    );
  }
}
export default HomePartnerImages;
