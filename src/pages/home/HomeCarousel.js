import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import * as contentful from "contentful";
import { withRouter } from "react-router-dom";


class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  setSpace = () => {
    return this.props.setSpace(this.props.match.params.space);
  };

  setAccessToken = () => {
    return this.props.setAccessToken(this.props.match.params.space);
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken(),
    environment: this.props.environment
  });

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.fetchHomeContent().then(this.setHomeContent);
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

  fetchHomeContent = () =>
    this.client.getEntries({
      content_type: "homePageHeaderProductImage",
      locale: this.props.match.params.locale
    });

  setHomeContent = response => {
    const homeContent = response.items;
    let filteredhomeContent = homeContent.filter(
      homeContent => homeContent.fields.pageType === "homePage"
    );
    let filteredhomeContentFields = filteredhomeContent[0].fields;
    for (let key in filteredhomeContentFields) {
      if (Array.isArray(filteredhomeContentFields[key])) {
        if (typeof filteredhomeContentFields[key][0] === "string") {
          this.setState({
            [key]: filteredhomeContentFields[key]
          })
        }
      }
    }
  };

  render() {
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
    const videoArray = this.state.homePageVideoCaseStudyVideoArray
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
            {this.state.width <= 900 && (
              <ReactPlayer
                className="video mx-auto"
                width="600px"
                height="366px"
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
