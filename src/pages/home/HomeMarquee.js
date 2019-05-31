import React from "react";
import HomeMarqueeList from "././homeMarquee/HomeMarqueeList";
import BlueOval from "../../img/home/BlueOval.svg";
import Line from "../../img/Line.svg";
import Stroke10 from "../../img/Stroke10.svg";
import MediaQuery from "react-responsive";
import * as contentful from "contentful";
import { withRouter } from "react-router-dom";

class HomeMarquee extends React.Component {
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
      content_type: "marqueeItem",
      locale: this.props.match.params.locale
    });

  setContent = response => {
    const pageContent = response.items;
    this.setState({ marqueeCount: pageContent.length });
  };

  render() {
    return (
      <MediaQuery query="(min-device-width: 1224px)">
        <div
          className="marquee"
          style={{ minWidth: this.state.marqueeCount * 395 }}
        >
          <div className="marquee--inner">
            <HomeMarqueeList
              locale={this.props.locale}
              accessToken={this.props.accessToken}
              space={this.props.space}
              spaces={this.props.spaces}
            />
            <HomeMarqueeList
              locale={this.props.locale}
              accessToken={this.props.accessToken}
              space={this.props.space}
              spaces={this.props.spaces}
            />
          </div>
          <img className="marquee-oval" src={BlueOval} />
          <img className="marquee-line" src={Line} />
          <img className="marquee-stroke10" src={Stroke10} />
        </div>
      </MediaQuery>
    );
  }
}
export default withRouter(HomeMarquee);
