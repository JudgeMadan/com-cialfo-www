import React from "react";
import HomeMarqueeListObject from "./homeMarqueeList/HomeMarqueeListObject";
import * as contentful from "contentful";

class HomeMarqueeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
  });

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchAboutContent().then(this.setAboutContent);
    }
  }

  componentDidMount() {
    this.fetchAboutContent().then(this.setAboutContent);
  }

  fetchAboutContent = () =>
    this.client.getEntries({
      content_type: "marqueeItem",
      locale: this.props.locale
    });

  setAboutContent = response => {
    const marqueeItemArray = response.items;
    this.setState({
      marqueeItemArray: marqueeItemArray
    });
  };

  render() {
    const marqueeItemArrays = this.state.marqueeItemArray;
    let marqueeItemArray;

    if (marqueeItemArrays) {
      marqueeItemArray = marqueeItemArrays.map(marqueeItemArray => {
        return (
          <HomeMarqueeListObject
            key={marqueeItemArray.sys.id}
            marqueeItemArray={marqueeItemArray}
          />
        );
      });
    }

    return <div>{marqueeItemArray}</div>;
  }
}
export default HomeMarqueeList;
