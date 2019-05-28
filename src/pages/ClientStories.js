import React from "react";
import Container from "react-bootstrap/Container";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import "./clientStories/clientStories.css";
import ClientStoriesHomePageCards from "./clientStories/ClientStoriesHomePageCards";
import HomeMarquee from "../pages/home/HomeMarquee";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
class ClientStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setSpace = () => {
    if (this.props.match.params.space === "cn") {
      return this.props.spaces.cn.space;
    }
    if (this.props.match.params.space === "intl") {
      return this.props.spaces.intl.space;
    }
  };

  setAccessToken = () => {
    if (this.props.match.params.space === "cn") {
      return this.props.spaces.cn.accessToken;
    }
    if (this.props.match.params.space === "intl") {
      return this.props.spaces.intl.accessToken;
    }
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken()
  });

  render() {
    console.log(this.props);
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
          <Row className="mb-5 center-in-row">
            <HomeMarquee
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
              spaces={this.props.spaces}
            />
          </Row>
        </MediaQuery>
      </Container>
    );
  }
}

export default withRouter(ClientStories);
