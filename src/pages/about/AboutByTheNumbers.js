import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AboutByTheNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
    this.setByTheNumbersContent(this.props.byTheNumbers);
  }

  setByTheNumbersContent = byTheNumbers => {
    this.setState({
      byTheNumbers: byTheNumbers
    });
  };

  render() {
    const byTheNumbers = this.props.byTheNumbers;
    let byTheNumbersObject;

    if (byTheNumbers) {
      byTheNumbersObject = byTheNumbers.map(number => {
        return (
          <Col>
            <h1>{number.fields.aboutPageNumbersObjectTitle}</h1>
            <h2>{number.fields.aboutPageNumbersObjectSubtitle}</h2>
          </Col>
        );
      });
    }

    return <Row>{byTheNumbersObject}</Row>;
  }
}

export default AboutByTheNumbers;
