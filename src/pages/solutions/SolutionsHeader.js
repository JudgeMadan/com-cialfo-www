import React from "react";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import "./solutions.css";

class SolutionsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // client = contentful.createClient({
  //   space: this.props.space,
  //   accessToken: this.props.accessToken
  // });

  // componentDidMount() {
  //   this.fetchFeatures().then(this.setFeatures);
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.locale !== this.props.locale) {
  //     this.fetchFeatures().then(this.setFeatures);
  //   }
  // }

  // fetchFeatures = () => {
  //   return this.client.getEntries({
  //     content_type: "featuresPage",
  //     locale: this.props.locale
  //   });
  // };

  // setFeatures = response => {
  //   const featureContent = response.items[0].fields;
  //   for (let key in featureContent) {
  //     if (typeof featureContent[key] === "string") {
  //       this.setState({
  //         [key]: featureContent[key]
  //       });
  //     } else if (Array.isArray(featureContent[key])) {
  //       this.setState({
  //         [key]: featureContent[key]
  //       });
  //     } else {
  //       this.setState({
  //         [key]: featureContent[key].fields.file.url
  //       });
  //     }
  //   }
  // };

  render() {
    return (
      <div>
        <Row className="solutions-title">
          <h1 className="primary_font">SOLUTIONS HEADER</h1>
        </Row>
        <Row className="solutions-subtitle">
          <h5>SOLUTIONS CONTENT</h5>
        </Row>
      </div>
    );
  }
}

export default SolutionsHeader;
