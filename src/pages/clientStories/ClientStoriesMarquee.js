import React from "react";
import MediaQuery from "react-responsive";
import * as contentful from "contentful";
import ClientStoriesMarqueeList from "./clientStoriesMarquee/ClientStoriesMarqueeList";

class ClientStoriesMarquee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  componentDidMount() {
    this.fetchContent().then(this.setContent);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchContent().then(this.setContent);
    }
  }

  fetchContent = () =>
    this.client.getEntries({
      content_type: "clientStory",
      locale: this.props.locale
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
          />
          <ClientStoriesMarqueeList
            locale={this.props.locale}
            accessToken={this.props.accessToken}
            space={this.props.space}
            clientStoriesMarqueeCheck={this.clientStoriesMarqueeCheck}
          />
        </div>
      </div>
    );
  }
}
export default ClientStoriesMarquee;

// width = marquee.length * 300px;
