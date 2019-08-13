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
      playing_1: false,
      data: {}
    };
  }

  componentDidMount() {
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
    const videoArray = this.state.data.homePageVideoCaseStudyVideoArray
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
      <Slider {...settings}>{videoCarouselObject}</Slider>
    );
  }
}
export default withRouter(HomeCarousel);
