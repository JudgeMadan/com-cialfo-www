import React from "react";
import ClientStoriesItem from "./ClientStoriesItem";
import MobileClientStoriesItem from "./MobileClientStoriesItem";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext"

class ClientStoriesAmericanSchoolInChina extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      school: "americanSchoolInChina"
    };
  }

  setSpace = () => {
    return this.props.setSpace(this.props.match.params.space);
  };

  setAccessToken = () => {
    return this.props.setAccessToken(this.props.match.params.space);
  };

  componentDidMount() {
    this.context.fetchEntries("clientStory", true).then((response) => {
      let data = this.context.setContent(response, "americanSchoolInChina")
      this.setState({
        data: data
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries("clientStory", true).then((response) => {
        let data = this.context.setContent(response, "americanSchoolInChina")
        this.setState({
          data: data
        })
      });
    }
  }

  render() {
    return (
      <div>
        {/* FULL SCREEN CLIENT STORY PAGE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <ClientStoriesItem
            data={this.state.data}
            school={this.state.school}
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
            spaces={this.props.spaces}
            setSpace={this.props.setSpace}
            setAccessToken={this.props.setAccessToken}
            environment={this.props.environment}
          />
        </MediaQuery>
        {/* MOBILE CLIENT STORY PAGE */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileClientStoriesItem
            data={this.state.data}
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
            spaces={this.props.spaces}
            setSpace={this.props.setSpace}
            setAccessToken={this.props.setAccessToken}
            environment={this.props.environment}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default withRouter(ClientStoriesAmericanSchoolInChina);
