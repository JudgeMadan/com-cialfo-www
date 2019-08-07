import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import * as contentful from "contentful";
import { withRouter } from "react-router-dom";


class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing_1: false,
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
    this.fetchHomeContent().then(this.setHomeContent);
  }

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
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      initialSlide: 0,
      centerPadding: "10px",
      slidesToScroll: 1,
      centerMode: true,
    };
    const videoArray = this.state.homePageVideoCaseStudyVideoArray
    let videoCarouselObject;
    if (videoArray) {
      videoCarouselObject = videoArray.map(video => {
        return (
          <div>
            <div>
              <ReactPlayer
                className="video mx-auto"
                width="345px"
                height="194px"
                url={video}
              />
            </div>
          </div>
        );
      });
    }
    return (
      <Slider {...settings} >{videoCarouselObject}</Slider>
    );
  }
}
export default withRouter(HomeCarousel);
