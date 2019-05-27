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
    console.log(this.props);
    return (
      <Container>
        <Row>
          <Col className="client-top-row-left-col">
            <div>
              <Row>
                <p className="primary_font">{this.props.schoolName}</p>
              </Row>
              <Row>
                <h1 className="primary_font client-top-row-blurb left-side-header-title-large-font">
                  {this.props.schoolBlurb}
                </h1>
              </Row>
            </div>
          </Col>
          <Col>
            <img
              className="client-story-hero-image"
              src={this.props.schoolImage}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="client-school-card px-5 pt-5">
            <Row className="mb-5">
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
            <Row>
              <button className="mt-5 client-sales-button">
                {this.props.buttonText}
              </button>
            </Row>
          </Col>
          <Col>
            {this.props.testimonialType === 1 && (
              <ClientStoriesItemTestimonialType1
                testimonialBlurb_1={this.props.testimonialBlurb_1}
                testimonialBlurb_2={this.props.testimonialBlurb_2}
                testimonialBlurb_3={this.props.testimonialBlurb_3}
                testimonialPullQuote_1={this.props.testimonialPullQuote_1}
                testimonialVideo={this.props.testimonialVideo}
                videoWidth="600px"
                videoHeight="336px"
              />
            )}

            {this.props.testimonialType === 2 && (
              <ClientStoriesItemTestimonialType2
                testimonialBlurb_1={this.props.testimonialBlurb_1}
                testimonialBlurb_2={this.props.testimonialBlurb_2}
                testimonialBlurb_3={this.props.testimonialBlurb_3}
                testimonialPullQuote_1={this.props.testimonialPullQuote_1}
                testimonialVideo={this.props.testimonialVideo}
                videoWidth="600px"
                videoHeight="336px"
              />
            )}
          </Col>
        </Row>

        <Row className="center-in-row my-5">
          <h1 className="primary_font">More Client Stories</h1>
        </Row>

        <Row>
          <ClientStoriesMarquee
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
          />
        </Row>
      </Container>
    );
  }
}
export default ClientStoriesItem;
