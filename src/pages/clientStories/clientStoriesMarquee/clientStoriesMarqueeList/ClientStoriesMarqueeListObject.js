import React from "react";
import * as contentful from "contentful";

class ClientStoriesMarqueeListObject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientStoryMarquee: []
    };
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  updateClientStoryApiKey = clientStoryApiKey => {
    this.props.updateClientStoryApiKey(clientStoryApiKey);
  };

  fetchClientStoryMarqueeItems = () =>
    this.client.getEntries({
      content_type: "clientStoryMarqueeItem"
    });

  setClientStoryMarqueeItems = response => {
    const items = response.items;
    this.clientStoryMarquee = items.map(item => {
      let clientStoryItem = {};
      clientStoryItem["clientStoryMarqueeApiKey"] =
        item.fields.clientStoryMarqueeApiKey;
      clientStoryItem["clientStoryMarqueeImgLink"] =
        item.fields.clientStoryMarqueeClientStoryImg.fields.clientStoryMarqueeImage.fields.file.url;
      return clientStoryItem;
    });
    this.setState({
      clientStoryMarquee: this.clientStoryMarquee
    });
  };

  componentDidMount() {
    this.fetchClientStoryMarqueeItems().then(this.setClientStoryMarqueeItems);
  }

  render() {
    return (
      <div>
        {this.state.clientStoryMarquee.map((item, index) => {
          return (
            <img
              onClick={() =>
                this.updateClientStoryApiKey(item.clientStoryMarqueeApiKey)
              }
              src={item.clientStoryMarqueeImgLink}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
export default ClientStoriesMarqueeListObject;
