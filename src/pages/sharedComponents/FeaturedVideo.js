import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MediaQuery from "react-responsive";
import ReactPlayer from "react-player";
import { DataContext } from "../../contexts/DataContext"
import "./FeaturedVideo.css";

class FeaturedVideo extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.context.fetchEntries("featuredVideo").then((response) => {
      let data = this.context.setContent(response, "featuredVideo")
      this.setState({
        data: data
      })
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <MediaQuery query="(min-width: 1224px)">
          <Row className="featuredVideoContainer">
            <Col className="featuredVideoWrapper mb-0 d-flex">
              <div className="my-auto">
                <ReactPlayer
                  className="featuredVideo mx-auto position-absolute"
                  width="100%"
                  height="100%"
                  url={data.url}
                />
              </div>
            </Col>
            <Col className="featuredVideoInfo d-flex">
              <div className="my-auto">
                <h1 className="primary_font">{data.title}</h1>
                <p className="secondary_font">{data.description}</p>
                <button className="btn caseStudyBtn">Read the case study</button>
              </div>
            </Col>
          </Row>
        </MediaQuery>
        <MediaQuery query="(max-width: 1223px) and (min-width: 768px)">
          <Row className="featuredVideoContainer">
            <Col>
              <div className="featuredVideoWrapper mr-0">
                <div className="position-relative">
                  <ReactPlayer
                    className="featuredVideo position-absolute"
                    width="100%"
                    height="100%"
                    url={data.url}
                  />
                </div>
              </div>
              <div className="featuredVideoInfo text-center px-5">
                <h1 className="primary_font">{data.title}</h1>
                <p className="secondary_font">{data.description}</p>
                <button className="btn caseStudyBtn">Read the case study</button>
              </div>
            </Col>
          </Row>
        </MediaQuery>
        <MediaQuery query="(max-width: 767px)">
          <Row className="featuredVideoContainer py-5 px-3">
            <Col>
              <div className="featuredVideoWrapper mr-0">
                <div className="position-relative">
                  <ReactPlayer
                    className="featuredVideo position-absolute"
                    width="100%"
                    height="100%"
                    url={data.url}
                  />
                </div>
              </div>
              <div className="featuredVideoInfo text-center">
                <h1 className="primary_font">{data.title}</h1>
                <p className="secondary_font">{data.description}</p>
                <button className="btn caseStudyBtn">Read the case study</button>
              </div>
            </Col>
          </Row>
        </MediaQuery>
      </div>
    );
  }
}
export default FeaturedVideo;
