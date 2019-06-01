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
    return (
      <Container className="events-subfooter-page">
        <div className="full-width-dark-blue-custom-height">
          <Row>
            <Col className="subFooterPageImgContainer">
              {this.state.width > 992 && (
                <img className="subFooterPageImg" src={this.props.img} />
              )}
              {this.state.width < 993 && (
                <img
                  className="event-small-subFooterPageImg"
                  src={this.props.img}
                />
              )}
            </Col>
            <Col className="subFooterPageQuote">
              <Row>
                {this.state.width > 768 && (
                  <div>
                    <h1 className="primary_font sub_footer_quote white_font">
                      {this.props.title}
                    </h1>
                    <h5 className="secondary_font sub_footer_quote white_font">
                      {this.props.quote}
                    </h5>
                  </div>
                )}
                {this.state.width < 767 && (
                  <div>
                    <h1 className="primary_font event-small_sub_footer_quote white_font">
                      {this.props.title}
                    </h1>
                    <h5 className="secondary_font events_small_sub_footer_blurb white_font">
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
