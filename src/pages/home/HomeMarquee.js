import React from "react";

class HomeMarquee extends React.Component {
  render() {
    return (
      <div className="marquee">
        <div className="marquee--inner">
          <div className="contentSpan">
            <div className="orb ">
              <img src="https://fillmurray.com/150/100" />
            </div>
            <div className="orb ">
              <img src="https://fillmurray.com/150/100" />
            </div>
            <div className="orb ">
              <img src="https://fillmurray.com/150/100" />
            </div>
            <div className="orb ">
              <img src="https://fillmurray.com/150/100" />
            </div>
          </div>
          <div className="contentSpan">
            <div className="orb ">
              <img src="https://fillmurray.com/150/100" />
            </div>
            <div className="orb ">
              <img src="https://fillmurray.com/150/100" />
            </div>
            <div className="orb ">
              <img src="https://fillmurray.com/150/100" />
            </div>
            <div className="orb ">
              <img src="https://fillmurray.com/150/100" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeMarquee;
