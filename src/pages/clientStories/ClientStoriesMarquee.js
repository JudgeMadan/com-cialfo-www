import React from "react";

class ClientStoriesMarquee extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  updateClientStoryApiKey = clientStoryApiKey => {
    this.props.updateClientStoryApiKey(clientStoryApiKey);
  };

  render() {
    return (
      <h1 className="marquee">
        <div className="content">
          <img
            onClick={() =>
              this.updateClientStoryApiKey("7BLnyQxFOezaog26iqOZ7")
            }
            src="https://fillmurray.com/g/200/300"
          />
          <img
            onClick={() =>
              this.updateClientStoryApiKey("593AozfnlOemEh7qSo5NFp")
            }
            src="https://fillmurray.com/200/300"
          />
        </div>
      </h1>
    );
  }
}
export default ClientStoriesMarquee;
