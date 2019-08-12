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
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  render() {
    return (
      <Container>
        {this.state.width > 1000 && (
          <Row>
            <Col className="client-top-row-left-col">
              <div>
                <Row>
                  <p className="primary_font">{this.props.data.clientStorySchoolName}</p>
                </Row>
                <Row>
                  <h1 className="primary_font client-top-row-blurb left-side-header-title-large-font">
                    {this.props.data.clientStoryStoryBlurb}
                  </h1>
                </Row>
              </div>
            </Col>
            <Col>
              <img
                className="client-story-hero-image"
                src={this.props.data.clientStorySchoolImage}
              />
            </Col>
          </Row>
        )}
        {this.state.width <= 1000 && (
          <Container>
            <Row className="center-in-row">
              <img
                className="client-story-hero-image"
                src={this.props.data.clientStorySchoolImage}
              />
            </Row>
            <Row className="center-in-row">
              <p className="primary_font">{this.props.data.clientStorySchoolName}</p>
            </Row>
            <Row>
              <h1 className="primary_font client-top-row-blurb left-side-header-title-large-font">
                {this.props.data.clientStoryStoryBlurb}
              </h1>
            </Row>
          </Container>
        )}
        <Row className="mt-5">
          {this.state.width > 1000 && (
            <Col className="client-school-card px-5 pt-5">
              <Row className="mb-5">
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
              <Row>
                <button className="mt-5 client-sales-button">
                  {this.props.data.clientStoryContactSalesText}
                </button>
              </Row>
            </Col>
          )}
          {this.state.width <= 1000 && (
            <Container className="client-school-card-medium p-5 mb-5">
              <Row className="mb-5 center-in-row">
                <img src={this.props.data.clientStoryLogo} />
              </Row>
              <Row>
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
          )}
          <Col>
            {this.props.testimonialType === 1 && (
              <ClientStoriesItemTestimonialType1
                testimonialBlurb_1={this.props.data.clientStoryTestimonialBlurb1}
                testimonialBlurb_2={this.props.data.clientStoryTestimonialBlurb2}
                testimonialBlurb_3={this.props.data.clientStoryTestimonialBlurb3}
                testimonialPullQuote_1={this.props.data.clientStoryTestimonialPullQuote1}
                testimonialVideo={this.props.data.clientStoryTestimonialVideoEmbedLink}
                videoWidth="600px"
                videoHeight="336px"
              />
            )}

            {this.props.testimonialType === 2 && (
              <ClientStoriesItemTestimonialType2
                testimonialBlurb_1={this.props.data.clientStoryTestimonialBlurb1}
                testimonialBlurb_2={this.props.data.clientStoryTestimonialBlurb2}
                testimonialBlurb_3={this.props.data.clientStoryTestimonialBlurb3}
                testimonialPullQuote_1={this.props.data.clientStoryTestimonialPullQuote1}
                testimonialVideo={this.props.data.clientStoryTestimonialVideoEmbedLink}
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
            school={this.props.school}
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
            spaces={this.props.spaces}
            setSpace={this.props.setSpace}
            setAccessToken={this.props.setAccessToken}
            environment={this.props.environment}
          />
        </Row>
      </Container>
    );
  }
}
export default ClientStoriesItem;
