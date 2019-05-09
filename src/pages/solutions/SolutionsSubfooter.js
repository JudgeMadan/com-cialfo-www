import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../features/Features.css";

class SolutionsSubfooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="featuresSendPage subFooterPage">
        <div className="full-width-dark-blue-custom-height">
          <div className="feature-sub-footer-inner-div">
            <Row className="sub-footer-content-row">
              <Col className="subFooterPageImgContainer">
                <img className="subFooterPageImg" src={this.props.img} />
              </Col>
              <Col className="subFooterPageQuote">
                <Row>
                  <h1 className="primary_font sub_footer_quote white_font">
                    "{this.props.quote}"
                  </h1>
                  <br />
                  <br />
                  <p className="secondary_font white_font">
                    {this.props.quoteAuthor} <br />
                    {this.props.quoteAuthorCredit}
                  </p>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}
export default SolutionsSubfooter;