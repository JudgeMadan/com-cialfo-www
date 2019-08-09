import React from "react";
import Container from "react-bootstrap/Container";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import "./clientStories/clientStories.css";
import ClientStoriesHomePageCards from "./clientStories/ClientStoriesHomePageCards";
import HomeMarquee from "../pages/home/HomeMarquee";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import { DataContext } from "../contexts/DataContext"

class ClientStories extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  setSpace = () => {
    return this.props.setSpace(this.props.match.params.space);
  };

  setAccessToken = () => {
    return this.props.setAccessToken(this.props.match.params.space);
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken(),
    environment: this.props.environment
  });

  render() {
    const space = this.props.match.params.space;
    return (
      <Container>
        {this.props.match.params.locale === "en-US" && (
          <div>
            <Row className="center-in-row">
              <p className="primary_font client-header-subtitle">
                Client Stories
              </p>
            </Row>
            <Row className="center-in-row mx-5">
              <h1 className="primary_font client-header-title-large-font">
                Lorem ipsum dolor sit amet consectetur
              </h1>
            </Row>
          </div>
        )}
        {this.props.match.params.locale === "zh-CN" && (
          <div>
            <Row className="center-in-row">
              <p className="primary_font">中文</p>
            </Row>
            <Row className="center-in-row">
              <h1 className="primary_font client-header-title-large-font">
                Lorem ipsum dolor sit amet consectetur
              </h1>
            </Row>
          </div>
        )}
        <Row>
          <ClientStoriesHomePageCards
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
            spaces={this.props.spaces}
            setSpace={this.props.setSpace}
            setAccessToken={this.props.setAccessToken}
            environment={this.props.environment}
          />
        </Row>
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="center-in-row my-5">
            {this.props.locale === "en-US" && (
              <h1 className="primary_font">
                The top international schools trust Cialfo
              </h1>
            )}
            {this.props.locale === "zh-CN" && (
              <h1 className="primary_font">中文名</h1>
            )}
          </Row>
          {space !== "us" && (
            <Row className="mb-5 center-in-row">
              <HomeMarquee
                locale={this.props.locale}
                space={this.props.space}
                accessToken={this.props.accessToken}
                spaces={this.props.spaces}
                setSpace={this.props.setSpace}
                setAccessToken={this.props.setAccessToken}
                environment={this.props.environment}
              />
            </Row>
          )}
        </MediaQuery>
      </Container>
    );
  }
}

export default withRouter(ClientStories);
