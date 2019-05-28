import React from "react";
import HomeMarqueeListObject from "./homeMarqueeList/HomeMarqueeListObject";
import * as contentful from "contentful";
import { withRouter } from "react-router-dom";

class HomeMarqueeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
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
      locale: this.props.match.params.locale
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
      let filteredmarqueeItemArrays = marqueeItemArrays.filter(
        marqueeItem => marqueeItem.fields.marqueeType === "testimonial"
      );
      marqueeItemArray = filteredmarqueeItemArrays.map(marqueeItemArray => {
        return (
          <HomeMarqueeListObject
            key={marqueeItemArray.sys.id}
            marqueeItemArray={marqueeItemArray}
            locale={this.props.locale}
          />
        );
      });
    }

    return <div>{marqueeItemArray}</div>;
  }
}
export default withRouter(HomeMarqueeList);
