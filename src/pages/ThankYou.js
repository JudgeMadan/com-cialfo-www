import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import React from "react";
import "./privacyAndSecurity/privacyAndSecurity.css";
import * as contentful from "contentful";
import ThankYouImg from "../img/ThankYou.svg";
import GrayLines from "../img/GrayLines.svg";
import MediaQuery from "react-responsive";

class ThankYou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  componentDidMount() {
    this.fetchGetADemo().then(this.setGetADemo);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchGetADemo().then(this.setGetADemo);
    }
  }

  fetchGetADemo = () => {
    return this.client.getEntry("7LSK0DMIgxeHkpjNlqQZLP");
  };

  setGetADemo = response => {
    const thankYouContent = response.fields;
    for (let key in thankYouContent) {
      if (typeof thankYouContent[key] === "string") {
        this.setState({
          [key]: thankYouContent[key]
        });
      }
    }
  };

  render() {
    return (
      <Container className="thank_you_outer_content">
        {/* FULL SCREEN THANK YOU */}
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Row className="four_oh_four_content pb-5">
              <div>
                <img className="blue-header-svg" src={ThankYouImg} />
                <img className="thank-you-gray-lines" src={GrayLines} />
              </div>
            </Row>
            {this.props.locale !== "zh-CN" && (
              <Row className="four_oh_four_content">
                <div>
                  <h1 className="primary_font thank-you-title-text">
                    Thank you for getting in touch!
                  </h1>
                </div>
              </Row>
            )}
            {this.props.locale !== "zh-CN" && (
              <Row className="four_oh_four_content">
                <div>
                  <h1 className="secondary_font">
                    Your request has been successful, lorem ipsum dolor sit amet
                    consectetur adispicing
                  </h1>
                </div>
              </Row>
            )}
            {this.props.locale === "zh-CN" && (
              <Row className="four_oh_four_content">
                <div>
                  <h1 className="primary_font">
                    中文中文中文中文中文中文中文中文
                  </h1>
                </div>
              </Row>
            )}
            {this.props.locale === "zh-CN" && (
              <Row className="four_oh_four_content">
                <div>
                  <h1 className="secondary_font">
                    中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文
                  </h1>
                </div>
              </Row>
            )}
            <Row className="four_oh_four_content button">
              <Link className="nav-link nav-link-no-underline" to="">
                {this.props.locale === "zh-CN" && (
                  <button className="submit_button">回家</button>
                )}
                {this.props.locale !== "zh-CN" && (
                  <button className="submit_button">Return Home</button>
                )}
              </Link>
            </Row>
          </div>
        </MediaQuery>
        {/* MOBILE THANK YOU */}
        <MediaQuery query="(max-device-width: 1223px)">
          <div>
            <Row className="four_oh_four_content my-5 pb-5">
              <div>
                <img className="mobile-thank-you-svg" src={ThankYouImg} />
                <img className="thank-you-gray-lines" src={GrayLines} />
              </div>
            </Row>
            {this.props.locale !== "zh-CN" && (
              <Row className="four_oh_four_content">
                <div>
                  <h1 className="primary_font thank-you-title-text">
                    Thank you for getting in touch!
                  </h1>
                </div>
              </Row>
            )}
            {this.props.locale !== "zh-CN" && (
              <Row className="four_oh_four_content">
                <div>
                  <h1 className="secondary_font text-align-center">
                    Your request has been successful, lorem ipsum dolor sit amet
                    consectetur adispicing
                  </h1>
                </div>
              </Row>
            )}
            {this.props.locale === "zh-CN" && (
              <Row className="four_oh_four_content">
                <div>
                  <h1 className="primary_font">
                    中文中文中文中文中文中文中文中文
                  </h1>
                </div>
              </Row>
            )}
            {this.props.locale === "zh-CN" && (
              <Row className="four_oh_four_content text-align-center">
                <div>
                  <h1 className="secondary_font">
                    中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文
                  </h1>
                </div>
              </Row>
            )}
            <Row className="four_oh_four_content button">
              <Link className="nav-link nav-link-no-underline" to="">
                {this.props.locale === "zh-CN" && (
                  <button className="submit_button">回家</button>
                )}
                {this.props.locale !== "zh-CN" && (
                  <button className="submit_button">Return Home</button>
                )}
              </Link>
            </Row>
          </div>
        </MediaQuery>
      </Container>
    );
  }
}

export default ThankYou;
