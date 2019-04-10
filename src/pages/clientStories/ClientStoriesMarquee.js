import React from "react";
import * as contentful from "contentful";
import ClientStoriesMarqueeItem from "./clientStoriesMarquee/ClientStoriesMarqueeItem";

class ClientStoriesMarquee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      return <h1>Hey</h1>;
    });
  };

  componentDidMount() {
    this.fetchClientStoryMarqueeItems().then(this.setClientStoryMarqueeItems);
  }

  render() {
    console.log(this.clientStoryMarquee);
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
        <ClientStoriesMarqueeItem />
      </h1>
    );
  }
}
export default ClientStoriesMarquee;
