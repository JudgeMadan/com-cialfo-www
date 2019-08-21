import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FeaturedVideo.css";
import ReactPlayer from "react-player";
import { DataContext } from "../../contexts/DataContext"

class FeaturedVideo extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);

    this.state = {
      data: null
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
    return data && (
      <Row className="featuredVideoContainer">
        <Col className="featuredVideoWrapper d-flex">
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
    );
  }
}
export default FeaturedVideo;
