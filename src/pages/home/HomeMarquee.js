import React from "react";
import HomeMarqueeList from "././homeMarquee/HomeMarqueeList";
import BlueOval from "./BlueOval.svg";
import Line from "./Line.svg";
import Stroke10 from "./Stroke10.svg";
import MediaQuery from "react-responsive";

class HomeMarquee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MediaQuery query="(min-device-width: 1224px)">
        <div className="marquee">
          <div className="marquee--inner">
            <HomeMarqueeList locale={this.props.locale} />
            <HomeMarqueeList locale={this.props.locale} />
          </div>
          <img className="marquee-oval" src={BlueOval} />
          <img className="marquee-line" src={Line} />
          <img className="marquee-stroke10" src={Stroke10} />
        </div>
      </MediaQuery>
    );
  }
}
export default HomeMarquee;
