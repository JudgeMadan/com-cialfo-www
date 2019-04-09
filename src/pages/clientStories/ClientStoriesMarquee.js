import React from "react";

class ClientStoriesMarquee extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      direction: null
    };
  }

  render() {
    return (
      <h1 className="marquee">
        <div className="content">
          <img src="https://fillmurray.com/200/300" />
          <img src="https://fillmurray.com/g/200/300" />
          <img src="https://fillmurray.com/200/300" />
          <img src="https://fillmurray.com/g/200/300" />
          <img src="https://fillmurray.com/200/300" />
          <img src="https://fillmurray.com/g/200/300" />
        </div>
      </h1>
    );
  }
}
export default ClientStoriesMarquee;
