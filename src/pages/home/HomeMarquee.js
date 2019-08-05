import React from "react";
import HomeMarqueeList from "././homeMarquee/HomeMarqueeList";
import BlueOval from "../../img/home/BlueOval.svg";
import Line from "../../img/Line.svg";
import Stroke10 from "../../img/Stroke10.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext"

class HomeMarquee extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.context.fetchEntries().then(this.setContent2);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries().then(this.setContent2);
    }
  }

  setContent2 = response => {
    let filteredContent = response.filter(
      content => content.sys.contentType.sys.id === "marqueeItem"
    )
    this.setState({
      marqueeCount: filteredContent.length
    })
  }

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
              setSpace={this.props.setSpace}
              setAccessToken={this.props.setAccessToken}
              environment={this.props.environment}
            />
            <HomeMarqueeList
              locale={this.props.locale}
              accessToken={this.props.accessToken}
              space={this.props.space}
              spaces={this.props.spaces}
              setSpace={this.props.setSpace}
              setAccessToken={this.props.setAccessToken}
              environment={this.props.environment}
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
