import React from "react";
import ClientStoriesMarqueeItem from "./clientStoriesMarquee/ClientStoriesMarqueeItem";

class ClientStoriesMarquee extends React.Component {
  render() {
    return (
      <h1 className="marquee">
        <div className="marquee--inner">
          <ClientStoriesMarqueeItem
            updateClientStoryApiKey={this.props.updateClientStoryApiKey}
          />
        </div>
      </h1>
    );
  }
}
export default ClientStoriesMarquee;
