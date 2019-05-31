import React from "react";
import * as contentful from "contentful";
import ClientStoriesMarqueeList from "./clientStoriesMarquee/ClientStoriesMarqueeList";
import { withRouter } from "react-router-dom";

class ClientStoriesMarquee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setSpace = () => {
    if (this.props.match.params.space === "cn") {
      return this.props.spaces.cn.space;
    } else if (this.props.match.params.space === "intl") {
      return this.props.spaces.intl.space;
    } else if (this.props.match.params.space === "in") {
      return this.props.spaces.india.space;
    }
  };

  setAccessToken = () => {
    if (this.props.match.params.space === "cn") {
      return this.props.spaces.cn.accessToken;
    } else if (this.props.match.params.space === "intl") {
      return this.props.spaces.intl.accessToken;
    } else if (this.props.match.params.space === "in") {
      return this.props.spaces.india.accessToken;
    }
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken()
  });

  componentDidMount() {
    this.fetchContent().then(this.setContent);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.fetchContent().then(this.setContent);
    }
  }

  fetchContent = () =>
    this.client.getEntries({
      content_type: "clientStory",
      locale: this.props.match.params.locale
    });

  setContent = response => {
    const pageContent = response.items;
    this.setState({ clientMarqueeCount: pageContent.length });
  };

  render() {
    return (
      <div
        className="client-marquee"
        style={{ minWidth: this.state.clientMarqueeCount * 450 }}
      >
        <div className="client-marquee--inner">
          <ClientStoriesMarqueeList
            locale={this.props.locale}
            accessToken={this.props.accessToken}
            space={this.props.space}
            clientStoriesMarqueeCheck={this.clientStoriesMarqueeCheck}
            spaces={this.props.spaces}
          />
          <ClientStoriesMarqueeList
            locale={this.props.locale}
            accessToken={this.props.accessToken}
            space={this.props.space}
            clientStoriesMarqueeCheck={this.clientStoriesMarqueeCheck}
            spaces={this.props.spaces}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(ClientStoriesMarquee);
