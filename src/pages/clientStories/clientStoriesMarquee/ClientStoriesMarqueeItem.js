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
    console.log(this.state);
    return (
      <div>
        {this.state.clientStoryMarquee.map((item, index) => {
          return <h1>{item.clientStoryMarqueeApiKey}</h1>;
        })}
      </div>
    );
  }
}
export default ClientStoriesMarqueeItem;

// setClientStoryMarqueeItems = response => {
//   const items = response.items;
//   items.map(item =>
//     this.setState(
//       {
//         [item.sys.id]: {
//           clientStoryMarqueeApiKey: item.fields.clientStoryMarqueeApiKey,
//           clientStoryMarqueeImgLink:
//             item.fields.clientStoryMarqueeClientStoryImg.fields
//               .clientStoryMarqueeImage.fields.file.url
//         }
//       }
//        () => console.log(this.state)
//     )
//   );
// };
