import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    let settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      centerPadding: "60px",
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true
    };
    return (
      <div>
        <Slider {...settings} className="slider-container mx-auto">
          <div className="slider-element">
            <ReactPlayer
              className="video mx-auto"
              width="600px"
              height="366px"
              url={this.props.homePageVideoCaseStudyVideoEmbed}
            />
          </div>
          <div className="slider-element">
            <ReactPlayer
              className="video mx-auto"
              width="600px"
              height="366px"
              url={this.props.homePageVideoCaseStudyVideoEmbed}
            />
          </div>
          <div className="slider-element mx-auto">
            <ReactPlayer
              className="video mx-auto"
              width="600px"
              height="366px"
              url={this.props.homePageVideoCaseStudyVideoEmbed}
            />
          </div>
          <div className="slider-element mx-auto">
            <ReactPlayer
              className="video mx-auto"
              width="600px"
              height="366px"
              url={this.props.homePageVideoCaseStudyVideoEmbed}
            />
          </div>
          <div className="slider-element mx-auto">
            <ReactPlayer
              className="video mx-auto"
              width="600px"
              height="366px"
              url={this.props.homePageVideoCaseStudyVideoEmbed}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
export default HomeCarousel;
