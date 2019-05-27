import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../features/Features.css";

class EventsSubfooter extends React.Component {
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
    return (
      <Container className="events-subfooter-page">
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
                      {this.props.title}
                    </h1>
                    <h5 className="secondary_font sub_footer_quote white_font">
                      {this.props.quote}
                    </h5>
                  </div>
                )}

                {this.state.width < 1210 && (
                  <div>
                    <h1 className="primary_font small_sub_footer_quote white_font">
                      {this.props.title}
                    </h1>
                    <h5 className="secondary_font events_small_sub_footer_quote white_font">
                      {this.props.quote}
                    </h5>
                  </div>
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
export default EventsSubfooter;
