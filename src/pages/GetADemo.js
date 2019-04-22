import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about/About.css";

class GetADemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
  });

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchAboutContent().then(this.setAboutContent);
    }
  }

  componentDidMount() {
    this.fetchAboutContent().then(this.setAboutContent);
  }

  fetchAboutContent = () =>
    this.client.getEntries({
      content_type: "about",
      locale: this.props.locale
    });

  setAboutContent = response => {
    const aboutContent = response.items[0].fields;
    for (let key in aboutContent) {
      if (typeof aboutContent[key] === "string") {
        this.setState({
          [key]: aboutContent[key]
        });
      } else if (Array.isArray(aboutContent[key])) {
        this.setState({
          [key]: aboutContent[key]
        });
      } else {
        this.setState({
          [key]: aboutContent[key].fields.file.url
        });
      }
    }
  };

  render() {
    return <Container className="aboutPage"> HEY</Container>;
  }
}

export default GetADemo;
