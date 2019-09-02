import React from "react";
import ClientStoriesMarqueeList from "./clientStoriesMarquee/ClientStoriesMarqueeList";
import { withRouter } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext"

class ClientStoriesMarquee extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      clientMarqueeCount: ''
    };
  }

  componentDidMount() {
    this.context.fetchEntries(undefined, true).then((response) => {
      let data = this.context.setMarqueeContent(response, "clientStory")
      this.setState({
        clientMarqueeCount: data.length
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries().then((response) => {
        let data = this.context.setMarqueeContent(response, "marqueeItem")
        this.setState({
          clientMarqueeCount: data.length
        })
      });
    }
  }

  render() {
    return (
      <div
        className="client-marquee"
        style={{ minWidth: this.state.clientMarqueeCount * 450 }}
      >
        <div className="client-marquee--inner">
          <ClientStoriesMarqueeList
            school={this.props.school}
            clientStoriesMarqueeCheck={this.clientStoriesMarqueeCheck}
          />
          <ClientStoriesMarqueeList
            school={this.props.school}
            clientStoriesMarqueeCheck={this.clientStoriesMarqueeCheck}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(ClientStoriesMarquee);
