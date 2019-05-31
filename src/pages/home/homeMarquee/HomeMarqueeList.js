import React from "react";
import HomeMarqueeListObject from "./homeMarqueeList/HomeMarqueeListObject";
import * as contentful from "contentful";
import { withRouter } from "react-router-dom";

class HomeMarqueeList extends React.Component {
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

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
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
