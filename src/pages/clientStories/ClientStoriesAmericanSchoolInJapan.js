import React from "react";
import ClientStoriesItem from "./ClientStoriesItem";
import MobileClientStoriesItem from "./MobileClientStoriesItem";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext"


class ClientStoriesAmericanSchoolInJapan extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.context.fetchEntries("clientStory", true).then((response) => {
      let data = this.context.setContent(response, "americanSchoolInJapan")
      this.setState({
        data: data
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries("clientStory", true).then((response) => {
        let data = this.context.setContent(response, "americanSchoolInJapan")
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

export default withRouter(ClientStoriesAmericanSchoolInJapan);
