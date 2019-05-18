import React from "react";
import HomeMarqueeList from "././homeMarquee/HomeMarqueeList";
import BlueOval from "../../img/home/BlueOval.svg";
import Line from "../../img/Line.svg";
import Stroke10 from "../../img/Stroke10.svg";
import MediaQuery from "react-responsive";
import * as contentful from "contentful";

class HomeMarquee extends React.Component {
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
      content_type: "marqueeItem",
      locale: this.props.locale
    });

  setContent = response => {
    const pageContent = response.items;
    this.setState({ marqueeCount: pageContent.length });
  };

  render() {
    console.log(this.state.marqueeCount);
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
            />
            <HomeMarqueeList
              locale={this.props.locale}
              accessToken={this.props.accessToken}
              space={this.props.space}
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
export default HomeMarquee;
