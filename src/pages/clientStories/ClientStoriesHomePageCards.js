import React from "react";
import Row from "react-bootstrap/Row";
import ClientStoriesHomePageCardItem from "./clientStoriesHomePageCards/ClientStoriesHomePageCardItem";
import "./clientStories.css";
import { withRouter } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext"

class ClientStoriesHomePageCards extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = { schoolInfo: [] };
  }

  componentDidMount() {
    this.context.fetchEntries("clientStory", true).then((response) => {
      let data = this.context.setSchoolMarqueeContent(response, "clientStory")
      this.setState({
        schoolInfo: data
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries("clientStory", true).then((response) => {
        let data = this.context.setSchoolMarqueeContent(response, "clientStory")
        this.setState({
          schoolInfo: data
        })
      });
    }
  }

  render() {
    const schoolInfo = this.state.schoolInfo;
    let schoolInfoArray;
    if (schoolInfo) {
      schoolInfoArray = schoolInfo.map(schoolItem => {
        return (
          <ClientStoriesHomePageCardItem
            title={schoolItem.blurb}
            id={schoolItem.id}
            blurb={schoolItem.homePageBlurb}
            logo={schoolItem.logo}
            route={schoolItem.route}
          />
        );
      });
    }

    return <Row className="center-in-row">{schoolInfoArray}</Row>;
  }
}

export default withRouter(ClientStoriesHomePageCards);
