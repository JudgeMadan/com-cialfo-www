import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Features.css";

class FeaturesSubfooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    console.log(this.state.height);
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
          <Row className="feature-sub-footer-row">
            <Col className="subFooterPageImgContainer">
              {/* {this.state.width > 768 && ( */}
              <img className="subFooterPageImg" src={this.props.img} />

              {/* {this.state.width < 769 && ( */}
              {/* //   <img className="small-subFooterPageImg" src={this.props.img} /> */}
              {/* // )} */}
            </Col>
            <Col className="subFooterPageQuote">
              <Row className="sub-footer-content-row">
                {this.state.width > 1200 && (
                  <Container>
                    <h1 className="primary_font sub_footer_quote white_font">
                      "{this.props.quote}"
                    </h1>
                    <p className="secondary_font white_font">
                      {this.props.quoteAuthor} <br />
                      {this.props.quoteAuthorCredit}
                    </p>
                  </Container>
                )}

                {1000 < this.state.width && this.state.width < 1200 && (
                  <Container>
                    <h1 className="primary_font medium-sub_footer_quote white_font">
                      "{this.props.quote}"
                    </h1>
                    <p className="secondary_font white_font">
                      {this.props.quoteAuthor} <br />
                      {this.props.quoteAuthorCredit}
                    </p>
                  </Container>
                )}
                {770 < this.state.width && this.state.width < 1000 && (
                  <Container>
                    <h1 className="primary_font small-sub_footer_quote white_font">
                      "{this.props.quote}"
                    </h1>
                    <p className="secondary_font white_font">
                      {this.props.quoteAuthor} <br />
                      {this.props.quoteAuthorCredit}
                    </p>
                  </Container>
                )}
                {this.state.width < 770 && (
                  <Container>
                    <h1 className="primary_font tiny-sub_footer_quote white_font ">
                      "{this.props.quote}"
                    </h1>
                    <p className="secondary_font white_font tiny-sub_footer_quote">
                      {this.props.quoteAuthor} <br />
                      {this.props.quoteAuthorCredit}
                    </p>
                  </Container>
                )}
              </Row>
              <Row />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default FeaturesSubfooter;
