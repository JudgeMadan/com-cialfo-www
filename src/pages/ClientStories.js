import React from "react";
import ClientStoriesItem from "./clientStories/ClientStoriesItem";
import ClientStoriesMarquee from "./clientStories/ClientStoriesMarquee";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class ClientStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientStoryApiKey: `7BLnyQxFOezaog26iqOZ7`
    };
  }

  updateClientStoryApiKey = clientStoryApiKey => {
    this.setState({
      clientStoryApiKey: clientStoryApiKey
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <ClientStoriesItem
            clientStoryApiKey={this.state.clientStoryApiKey}
            className="pt-5"
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
          />
        </Row>
        <Row className="justify-content-md-center">
          <h1>More Stories!!</h1>
        </Row>
        <Row className="justify-content-md-center">
          <ClientStoriesMarquee
            updateClientStoryApiKey={this.updateClientStoryApiKey}
            space={this.props.space}
            accessToken={this.props.accessToken}
          />
        </Row>
      </Container>
    );
  }
}

export default ClientStories;
