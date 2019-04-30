import React from "react";
import HomeMarqueeList from "././homeMarquee/HomeMarqueeList";
import BlueOval from "./BlueOval.png";
import Line from "./Line.png";
import Stroke10 from "./Stroke10.png";

class HomeMarquee extends React.Component {
  render() {
    return (
      <div className="marquee">
        <div className="marquee--inner">
          <HomeMarqueeList />
          <HomeMarqueeList />
        </div>
        <img className="marquee-oval" src={BlueOval} />
        <img className="marquee-line" src={Line} />
        <img className="marquee-stroke10" src={Stroke10} />
      </div>
    );
  }
}
export default HomeMarquee;
