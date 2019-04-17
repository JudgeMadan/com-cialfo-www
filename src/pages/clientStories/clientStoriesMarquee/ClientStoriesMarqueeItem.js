import React from "react";
import * as contentful from "contentful";

class ClientStoriesMarqueeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientStoryMarquee: []
    };
  }

  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
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
export default ClientStoriesMarqueeItem;
