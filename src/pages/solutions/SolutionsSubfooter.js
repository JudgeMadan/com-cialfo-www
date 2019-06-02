import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../features/Features.css";

class SolutionsSubfooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    console.log(this.state.width);
    return (
      <Container className="featuresSendPage subFooterPage">
        <div className="full-width-dark-blue-custom-height">
          <Row>
            <Col className="subFooterPageImgContainer">
              {this.state.width > 768 && (
                <img className="subFooterPageImg" src={this.props.img} />
              )}
              {this.state.width <= 768 && (
                <img className="small-subFooterPageImg" src={this.props.img} />
              )}
            </Col>
            <Col className="subFooterPageQuote">
              <Row>
                {this.state.width > 1200 && (
                  <Container>
                    <h1 className="primary_font sub_footer_quote white_font">
                      "{this.props.quote}"
                    </h1>
                    <p className="secondary_font white_font solutions-bold">
                      {this.props.quoteAuthor}
                    </p>
                    <p className="secondary_font white_font">
                      {this.props.quoteAuthorCredit}
                    </p>
                  </Container>
                )}
                {992 <= this.state.width && this.state.width <= 1200 && (
                  <Container>
                    <h1 className="primary_font medium-sub_footer_quote white_font">
                      "{this.props.quote}"
                    </h1>
                    <p className="secondary_font white_font solutions-bold">
                      {this.props.quoteAuthor}
                    </p>
                    <p className="secondary_font white_font">
                      {this.props.quoteAuthorCredit}
                    </p>
                  </Container>
                )}
                {770 < this.state.width && this.state.width <= 992 && (
                  <Container>
                    <h1 className="primary_font tiny-sub_footer_quote white_font">
                      "{this.props.quote}"
                    </h1>
                    <p className="secondary_font white_font tiny-sub-footer-quote-author-credit solutions-bold">
                      {this.props.quoteAuthor}
                    </p>
                    <p className="secondary_font tiny-sub-footer-quote-author-credit white_font">
                      {this.props.quoteAuthorCredit}
                    </p>
                  </Container>
                )}
                {530 < this.state.width && this.state.width <= 770 && (
                  <Container className="tiny-solutions-sub-footer-container">
                    <h1 className="primary_font  extra-tiny-sub_footer_quote white_font ">
                      "{this.props.quote}"
                    </h1>
                    <p className="secondary_font extra-tiny-sub-footer-quote-author-credit white_font solutions-bold">
                      {this.props.quoteAuthor}
                    </p>
                    <p className="secondary_font extra-tiny-sub-footer-quote-author-credit white_font">
                      {this.props.quoteAuthorCredit}
                    </p>
                  </Container>
                )}
                {this.state.width <= 530 && (
                  <Container className="tiny-solutions-sub-footer-container">
                    <h1 className="primary_font  extra-extra-tiny-sub_footer_quote white_font ">
                      "{this.props.quote}"
                    </h1>
                    <p className="secondary_font extra-extra-tiny-sub-footer-quote-author-credit white_font solutions-bold">
                      {this.props.quoteAuthor}
                    </p>
                    <p className="secondary_font extra-extra-tiny-sub-footer-quote-author-credit white_font">
                      {this.props.quoteAuthorCredit}
                    </p>
                  </Container>
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default SolutionsSubfooter;
