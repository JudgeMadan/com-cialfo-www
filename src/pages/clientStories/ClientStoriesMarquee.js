import React from "react";
import MediaQuery from "react-responsive";
import ClientStoriesMarqueeList from "./clientStoriesMarquee/ClientStoriesMarqueeList";

class ClientStoriesMarquee extends React.Component {
  render() {
    return (
      <div className="client-marquee">
        <div className="client-marquee--inner">
          <ClientStoriesMarqueeList
            locale={this.props.locale}
            accessToken={this.props.accessToken}
            space={this.props.space}
          />
          <ClientStoriesMarqueeList
            locale={this.props.locale}
            accessToken={this.props.accessToken}
            space={this.props.space}
          />
        </div>
      </div>
    );
  }
}
export default ClientStoriesMarquee;
