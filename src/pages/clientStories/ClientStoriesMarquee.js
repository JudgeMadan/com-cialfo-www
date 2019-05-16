import React from "react";
import MediaQuery from "react-responsive";
import ClientStoriesMarqueeList from "./clientStoriesMarquee/ClientStoriesMarqueeList";

class ClientStoriesMarquee extends React.Component {
  render() {
    return (
      <MediaQuery query="(min-device-width: 1224px)">
        <div className="marquee">
          <div className="marquee--inner">
            {/* <ClientStoriesMarqueeList
              locale={this.props.locale}
              accessToken={this.props.accessToken}
              space={this.props.space}
            /> */}
            <ClientStoriesMarqueeList
              locale={this.props.locale}
              accessToken={this.props.accessToken}
              space={this.props.space}
            />
          </div>
        </div>
      </MediaQuery>
    );
  }
}
export default ClientStoriesMarquee;
