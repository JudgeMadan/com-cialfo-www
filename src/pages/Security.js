import Row from "react-bootstrap/Row";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import Container from "react-bootstrap/Container";
import * as contentful from "contentful";
import SecurityFeatureObject from "./privacyAndSecurity/SecurityFeatureObject";
class Security extends React.Component {
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
      content_type: "securityPage",
      locale: this.props.locale
    });

  setHomeContent = response => {
    const homeContent = response.items;
    console.log(homeContent);
    let filteredhomeContent = homeContent.filter(
      homeContent => homeContent.fields.pageType === "securityPage"
    );
    let filteredhomeContentFields = filteredhomeContent[0].fields;
    for (let key in filteredhomeContentFields) {
      if (typeof filteredhomeContentFields[key] === "string") {
        this.setState({
          [key]: filteredhomeContentFields[key]
        });
      } else if (Array.isArray(filteredhomeContentFields[key])) {
        this.setState({
          [key]: filteredhomeContentFields[key]
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
      <Container>
        <Row className="center-in-row">
          <h1 className="primary_font">{this.state.securityTitle}</h1>
        </Row>
        <Row className="center-in-row pb-5">
          <p className="secondary_font">{this.state.securitySubtitle}</p>
        </Row>
        <Row className="center-in-row light-blue-background">
          <h1 className="primary_font">{this.state.securityFeaturesTitle}</h1>
        </Row>
        <SecurityFeatureObject
          securityFeatures={this.state.securityFeaturesItems}
        />
      </Container>
    );
  }
}

export default Security;
