import React from "react";
import HomeMarqueeList from "././homeMarquee/HomeMarqueeList";

class HomeMarquee extends React.Component {
  render() {
    return (
      <div className="marquee">
        <div className="marquee--inner">
          <HomeMarqueeList />
          <HomeMarqueeList />
        </div>
      </div>
    );
  }
}
export default HomeMarquee;
