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
            {this.props.data.clientStorySchoolName}
          </p>
        </Row>
        <Row className="center-in-row">
          <div>
            <img
              className="mobile-client-story-hero-image"
              src={this.props.data.clientStorySchoolImage}
            />
          </div>
        </Row>
        <Container className="client-school-card my-5 px-5 pt-5">
          <Row className="mb-5 center-in-row">
            <img src={this.props.data.clientStoryLogo} />
          </Row>
          <Row className="mb-5">
            <p> "{this.props.data.clientStoryShortTestimonial}"</p>
          </Row>
          <Row>
            <p className="bold">
              <Octicon size="small" icon={Location} />
              <span> {this.props.data.clientStorySchoolLocation}</span>
            </p>
          </Row>
          <Row>
            <p className="bold">
              Number of Seniors:
              <span> {this.props.data.clientStoryNumberOfSeniors}</span>
            </p>
          </Row>
          <Row>
            <p className="bold">
              Counseling Team:
              <span> {this.props.data.clientStoryConsultingTeam}</span>
            </p>
          </Row>
          <Row>
            <p className="bold">
              Curriculum:
              <span> {this.props.data.clientStoryCurriculum}</span>
            </p>
          </Row>
          <Row className="center-in-row">
            <button className="mt-5 client-sales-button">
              {this.props.data.clientStoryContactSalesText}
            </button>
          </Row>
        </Container>
        <Row className="center-in-row">
          <h1 className="primary_font left-side-header-title-large-font text-align-center">
            {this.props.data.clientStoryContactSalesText}
          </h1>
        </Row>
        <Row className="mb-5">
          {this.props.testimonialType === 1 && (
            <Container>
              <ClientStoriesItemTestimonialType1
                testimonialBlurb_1={this.props.data.clientStoryTestimonialBlurb1}
                testimonialBlurb_2={this.props.data.clientStoryTestimonialBlurb2}
                testimonialBlurb_3={this.props.data.clientStoryTestimonialBlurb3}
                testimonialPullQuote_1={this.props.data.clientStoryTestimonialPullQuote1}
                testimonialVideo={this.props.data.clientStoryTestimonialVideoEmbedLink}
                videoWidth="345px"
                videoHeight="194px"
              />
            </Container>
          )}
          {this.props.testimonialType === 2 && (
            <Container>
              <ClientStoriesItemTestimonialType2
                testimonialBlurb_1={this.props.data.clientStoryTestimonialBlurb1}
                testimonialBlurb_2={this.props.data.clientStoryTestimonialBlurb2}
                testimonialBlurb_3={this.props.data.clientStoryTestimonialBlurb3}
                testimonialPullQuote_1={this.props.data.clientStoryTestimonialPullQuote1}
                testimonialVideo={this.props.data.clientStoryTestimonialVideoEmbedLink}
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
