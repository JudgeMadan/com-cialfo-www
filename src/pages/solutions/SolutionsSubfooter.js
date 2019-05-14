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
    console.log(this.state.height);
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  render() {
    console.log(this.state);
    return (
      <Container className="featuresSendPage subFooterPage">
        <div className="full-width-dark-blue-custom-height">
          <Row>
            <Col className="subFooterPageImgContainer">
              <img className="subFooterPageImg" src={this.props.img} />
            </Col>
            <Col className="subFooterPageQuote">
              <Row>
                {this.state.width > 1210 && (
                  <div>
                    <h1 className="primary_font sub_footer_quote white_font">
                      "{this.props.quote}"
                    </h1>
                    <p className="secondary_font white_font solutions-bold">
                      {this.props.quoteAuthor}
                    </p>
                    <p className="secondary_font white_font">
                      {this.props.quoteAuthorCredit}
                    </p>
                  </div>
                )}
                {this.state.width < 1210 && (
                  <div>
                    <h1 className="primary_font small_sub_footer_quote ">
                      "{this.props.quote}"
                    </h1>
                    <p className="secondary_font small_sub_footer_quote_author ">
                      {this.props.quoteAuthor} <br />
                      {this.props.quoteAuthorCredit}
                    </p>
                  </div>
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
