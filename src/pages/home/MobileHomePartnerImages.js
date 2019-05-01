import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MediaQuery from "react-responsive";
import * as contentful from "contentful";
import "./Home.css";

class MobileHomePartnerImages extends React.Component {
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
          <div>
            <MediaQuery query="(min-device-width: 1000px)">
              <Col key={image.sys.id}>
                <img
                  className="homePartnerImages"
                  src={image.fields.file.url}
                />
              </Col>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 999px)">
              <Col key={image.sys.id}>
                <div className="mobile-homePartnerImagesContainer">
                  <img
                    className="mobile-homePartnerImages"
                    src={image.fields.file.url}
                  />
                </div>
              </Col>
            </MediaQuery>
          </div>
        );
      });
    }

    return (
      <div>
        <Row className="imageObjectTitle">
          <h1 className="primary_font ">
            {this.state.homePagePoweredByOurPartnersTitle}
          </h1>
        </Row>
        <Row className="imageObjectRow">{imageObject}</Row>
      </div>
    );
  }
}
export default MobileHomePartnerImages;
