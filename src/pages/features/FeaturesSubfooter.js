import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Features.css";

class FeaturesSubfooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <Container className="featuresSendPage subFooterPage">
        <Container className="test">
          <Row>
            <Col>
              <img src="https://via.placeholder.com/360x500" />

              {/* <img src={this.props.img} /> */}
            </Col>
            <Col className="test">
              <h1 className="primary_font sub_footer_quote">
                "{this.props.quote}"
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
export default FeaturesSubfooter;
