import React from "react";
import HomeMarqueeList from "././homeMarquee/HomeMarqueeList";
import BlueOval from "../../img/home/BlueOval.svg";
import Line from "../../img/Line.svg";
import Stroke10 from "../../img/home/Stroke10.svg";
// import Stroke10 from "./Stroke10.svg";
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
            <HomeMarqueeList
              locale={this.props.locale}
              accessToken={this.props.accessToken}
              space={this.props.space}
            />
            <HomeMarqueeList
              locale={this.props.locale}
              accessToken={this.props.accessToken}
              space={this.props.space}
            />
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
