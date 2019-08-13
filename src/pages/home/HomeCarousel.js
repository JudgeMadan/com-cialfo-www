import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext"

class HomeCarousel extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      data: {}
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.context.fetchEntries("homePageHeaderProductImage").then((response) => {
      let data = this.context.setContent(response, "homePage")
      this.setState({
        data: data
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries("homePageHeaderProductImage").then((response) => {
        let data = this.context.setContent(response, "homePage")
        this.setState({
          data: data
        })
      });
    }
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
    console.log(this.state.data.homePageVideoCaseStudyVideoArray)
    let settings = {
      dots: true,
      focusOnSelect: true,
      draggable: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      initialSlide: 0,
      centerPadding: "150px",
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerPadding: "125px",
          }
        },
        {
          breakpoint: 1100,
          settings: {
            centerPadding: "100px",
          }
        },
        {
          breakpoint: 1000,
          settings: {
            centerPadding: "75px",
          }
        },
        {
          breakpoint: 950,
          settings: {
            centerPadding: "62.5px",
          }
        },
        {
          breakpoint: 900,
          settings: {
            centerPadding: "0px",
          }
        }
      ]
    };
    const videoArray = this.state.data.homePageVideoCaseStudyVideoArray
    let videoCarouselObject;
    if (videoArray) {
      videoCarouselObject = videoArray.map(video => {
        return (
          <div>
            {this.state.width > 900 && (
              <ReactPlayer
                className="video mx-auto"
                width="750px"
                height="458px"
                url={video}
              />
            )}
            {this.state.width <= 900 && this.state.width > 600 && (
              <ReactPlayer
                className="video mx-auto"
                width="600px"
                height="366px"
                url={video}
              />
            )}
            {this.state.width <= 600 && (
              <ReactPlayer
                className="video mx-auto"
                width="450px"
                height="275px"
                url={video}
              />
            )}
          </div>
        );
      });
    }
    return (
      <Slider {...settings} className="mb-5">{videoCarouselObject}</Slider>
    );
  }
}
export default withRouter(HomeCarousel);
