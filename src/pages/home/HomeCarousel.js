import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing_1: false,
    };
  }

  afterChangeHandler = (video) => {
    this.setState({
      playing_1: false,
    })
  }


  render() {
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
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
    const videoArray = this.props.homePageVideoCaseStudyVideoArray
    let videoCarouselObject;
    console.log(videoArray)
    if (videoArray) {
      videoCarouselObject = videoArray.map(video => {
        return (
          <div className="slider-outer-container">
            <div className="slider-element">
              <ReactPlayer
                // onClick={this.afterChangeHandler}
                className="video mx-auto"
                width="600px"
                height="366px"
                url={video}
              // playing={this.state.playing_1}
              />
            </div>
          </div>
        );
      });
    }
    return (
      <Slider {...settings} className="about-leadership-team-row">{videoCarouselObject}</Slider>
    );
  }
}
export default HomeCarousel;
