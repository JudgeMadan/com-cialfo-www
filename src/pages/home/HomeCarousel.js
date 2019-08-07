import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing_1: false,
      muted_1: false,
      playing_2: false,
      playing_3: false,
      playing_4: false,
      playing_5: false,
    };
  }

  afterChangeHandler = (video) => {
    this.setState({
      playing_1: false,
      muted_1: true,
      playing_2: false,
      playing_3: false,
      playing_4: false,
      playing_5: false,
    })
  }

  render() {
    let settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,

      // BASIC NOT FULL SCREEN CAROUSEL
      // centerPadding: "200px",
      centerPadding: "250px",
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerPadding: "200px",
          }
        },
        {
          breakpoint: 1100,
          settings: {
            centerPadding: "150px",
          }
        },
        {
          breakpoint: 1000,
          settings: {
            centerPadding: "100px",
          }
        },
        {
          breakpoint: 900,
          settings: {
            centerPadding: "50px",
          }
        }
      ]
    };
    return (
      <div className="slider-outer-container">
        <Slider {...settings} beforeChange={this.afterChangeHandler} className="slider-container mx-auto">
          <div className="slider-element">
            <ReactPlayer
              onClick={this.afterChangeHandler}
              className="video mx-auto"
              width="600px"
              height="366px"
              url={this.props.homePageVideoCaseStudyVideoEmbed}
              playing={this.state.playing_1}
            />
          </div>
          <div className="slider-element hello">
            <ReactPlayer
              className="video mx-auto"
              width="600px"
              height="366px"
              url={this.props.homePageVideoCaseStudyVideoEmbed}
              playing={this.state.playing_2}
            />
          </div>
          <div className="slider-element mx-auto">
            <ReactPlayer
              className="video mx-auto"
              width="600px"
              height="366px"
              url={this.props.homePageVideoCaseStudyVideoEmbed}
              playing={this.state.playing_3}
            />
          </div>
          <div className="slider-element mx-auto">
            <ReactPlayer
              className="video mx-auto"
              width="600px"
              height="366px"
              url={this.props.homePageVideoCaseStudyVideoEmbed}
              playing={this.state.playing_4}
            />
          </div>
          <div className="slider-element mx-auto">
            <ReactPlayer
              className="video mx-auto"
              width="600px"
              height="366px"
              url={this.props.homePageVideoCaseStudyVideoEmbed}
              playing={this.state.playing_5}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
export default HomeCarousel;
