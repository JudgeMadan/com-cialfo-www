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
    return this.props.setSpace(this.props.match.params.space);
  };

  setAccessToken = () => {
    return this.props.setAccessToken(this.props.match.params.space);
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken(),
    environment: this.props.environment
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
            setSpace={this.props.setSpace}
            setAccessToken={this.props.setAccessToken}
          />
          <ClientStoriesMarqueeList
            locale={this.props.locale}
            accessToken={this.props.accessToken}
            space={this.props.space}
            clientStoriesMarqueeCheck={this.clientStoriesMarqueeCheck}
            spaces={this.props.spaces}
            setSpace={this.props.setSpace}
            setAccessToken={this.props.setAccessToken}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(ClientStoriesMarquee);
