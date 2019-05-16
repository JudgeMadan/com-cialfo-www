import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ReactPlayer from "react-player";
import Col from "react-bootstrap/Col";

class ClientStoriesItemTestimonialType1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const blurb_1 = this.props.testimonialBlurb_1;
    const blurb_2 = this.props.testimonialBlurb_2;
    const blurb_3 = this.props.testimonialBlurb_1;
    const pullQuote_1 = this.props.testimonialPullQuote_1;
    const video = this.props.testimonialVideo;

    if ((blurb_1, blurb_2, blurb_3, pullQuote_1, video)) {
      return (
        <Container>
          <Row>
            <p className="secondary_font justify-text">{blurb_1}</p>
          </Row>
          <Row className="mt-5 mb-5 client-video-row">
            <ReactPlayer
              className="video"
              width="600px"
              height="336px"
              url={video}
            />
          </Row>
          <Row className="mt-5 mb-5">
            <h1 className="primary_font bold">"{pullQuote_1}"</h1>
          </Row>
          <Row>
            <p className="secondary_font justify-text">{blurb_2}</p>
          </Row>
          <Row>
            <p className="secondary_font justify-text">{blurb_3}</p>
          </Row>
        </Container>
      );
    } else {
      return <p />;
    }
  }
}
export default ClientStoriesItemTestimonialType1;
