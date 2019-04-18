import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AboutByTheNumbers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const byTheNumbers = this.props.byTheNumbers;
    let byTheNumbersObject;

    if (byTheNumbers) {
      byTheNumbersObject = byTheNumbers.map(number => {
        return (
          <Col key={number.sys.id}>
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
