import React from "react";

class HomeMarquee extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <h1 className="marquee">
        <div className="content">
          <img src="https://fillmurray.com/g/100/100" />
          <img src="https://fillmurray.com/100/100" />
        </div>
      </h1>
    );
  }
}
export default HomeMarquee;
