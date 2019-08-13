import React from "react";
import ClientStoriesMarqueeListObject from "./clientStoriesMarqueeList/ClientStoriesMarqueeListObject";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import { withRouter } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext"

class ClientStoriesMarqueeList extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      schoolInfo: [],
    };
  }


  componentDidMount() {
    this.context.fetchEntries("clientStory").then((response) => {
      let data = this.context.setSchoolMarqueeContent(response, "clientStory")
      this.setState({
        schoolInfo: data
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries("clientStory").then((response) => {
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
          <ClientStoriesMarqueeListObject
            id={schoolItem.id}
            blurb={schoolItem.blurb}
            logo={schoolItem.logo}
            route={schoolItem.route}
            locale={this.props.locale}
          />
        );
      });
    }
    return <Row>{schoolInfoArray}</Row>;
  }
}
export default withRouter(ClientStoriesMarqueeList);
