import React from "react";
import "./clientStories.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Octicon, { Location } from "@githubprimer/octicons-react";
import ClientStoriesItemTestimonialType1 from "./clientStoriesItem/ClientStoriesItemTestimonialType1";
import ClientStoriesItemTestimonialType2 from "./clientStoriesItem/ClientStoriesItemTestimonialType2";
import ClientStoriesMarquee from "./ClientStoriesMarquee";

class ClientStoriesItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row className="center-in-row mt-5">
          <p className="mobile-client-story-school-title primary_font">
            {this.props.schoolName}
          </p>
        </Row>
        <Row className="center-in-row">
          <div>
            <img
              className="mobile-client-story-hero-image"
              src={this.props.schoolImage}
            />
          </div>
        </Row>
        <Container className="client-school-card my-5 px-5 pt-5">
          <Row className="mb-5 center-in-row">
            <img src={this.props.schoolLogo} />
          </Row>
          <Row className="mb-5">
            <p> "{this.props.shortTestimonial}"</p>
          </Row>
          <Row>
            <p className="bold">
              <Octicon size="small" icon={Location} />
              <span> {this.props.location}</span>
            </p>
          </Row>
          <Row>
            <p className="bold">
              Number of Seniors:
              <span> {this.props.seniorNumbers}</span>
            </p>
          </Row>
          <Row>
            <p className="bold">
              Counseling Team:
              <span> {this.props.counselorNumbers}</span>
            </p>
          </Row>
          <Row>
            <p className="bold">
              Curriculum:
              <span> {this.props.curriculum}</span>
            </p>
          </Row>
          <Row className="center-in-row">
            <button className="mt-5 client-sales-button">
              {this.props.buttonText}
            </button>
          </Row>
        </Container>
        <Row className="center-in-row">
          <h1 className="primary_font left-side-header-title-large-font text-align-center">
            {this.props.schoolBlurb}
          </h1>
        </Row>
        <Row>
          {this.props.testimonialType === 1 && (
            <Container>
              <ClientStoriesItemTestimonialType1
                testimonialBlurb_1={this.props.testimonialBlurb_1}
                testimonialBlurb_2={this.props.testimonialBlurb_2}
                testimonialBlurb_3={this.props.testimonialBlurb_3}
                testimonialPullQuote_1={this.props.testimonialPullQuote_1}
                testimonialVideo={this.props.testimonialVideo}
                videoWidth="345px"
                videoHeight="194px"
              />
            </Container>
          )}
          {this.props.testimonialType === 2 && (
            <Container>
              <ClientStoriesItemTestimonialType2
                testimonialBlurb_1={this.props.testimonialBlurb_1}
                testimonialBlurb_2={this.props.testimonialBlurb_2}
                testimonialBlurb_3={this.props.testimonialBlurb_3}
                testimonialPullQuote_1={this.props.testimonialPullQuote_1}
                testimonialVideo={this.props.testimonialVideo}
                videoWidth="345px"
                videoHeight="194px"
              />
            </Container>
          )}
        </Row>
      </Container>
    );
  }
}
export default ClientStoriesItem;

// this.props.testimonialType
