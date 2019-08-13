import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import React from "react";
import "./privacyAndSecurity/privacyAndSecurity.css";
import ThankYouImg from "../img/ThankYou.svg";
import GrayLines from "../img/GrayLines.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";


class ThankYou extends React.Component {

  render() {
    const locale = this.props.match.params.locale
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
            {locale !== "zh-CN" && (
              <Row className="four_oh_four_content">
                <div>
                  <h1 className="primary_font thank-you-title-text">
                    Thank you for getting in touch!
                  </h1>
                </div>
              </Row>
            )}
            {locale !== "zh-CN" && (
              <Row className="four_oh_four_content">
                <div>
                  <h1 className="secondary_font">
                    Your request has been successful, lorem ipsum dolor sit amet
                    consectetur adispicing
                  </h1>
                </div>
              </Row>
            )}
            {locale === "zh-CN" && (
              <Row className="four_oh_four_content">
                <div>
                  <h1 className="primary_font">
                    中文中文中文中文中文中文中文中文
                  </h1>
                </div>
              </Row>
            )}
            {locale === "zh-CN" && (
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
                {locale === "zh-CN" && (
                  <button className="submit_button">回家</button>
                )}
                {locale !== "zh-CN" && (
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
                <img className="mobile-thank-you-gray-lines" src={GrayLines} />
              </div>
            </Row>
            {locale !== "zh-CN" && (
              <Row className="four_oh_four_content mx-3">
                <div>
                  <h1 className="primary_font thank-you-title-text text-align-center">
                    Thank you for getting in touch!
                  </h1>
                </div>
              </Row>
            )}
            {locale !== "zh-CN" && (
              <Row className="four_oh_four_content mx-3">
                <div>
                  <h1 className="secondary_font text-align-center">
                    Your request has been successful, lorem ipsum dolor sit amet
                    consectetur adispicing
                  </h1>
                </div>
              </Row>
            )}
            {locale === "zh-CN" && (
              <Row className="four_oh_four_content mx-3">
                <div>
                  <h1 className="primary_font thank-you-title-text text-align-center">
                    中文中文中文中文中文中文中文中文
                  </h1>
                </div>
              </Row>
            )}
            {locale === "zh-CN" && (
              <Row className="four_oh_four_content text-align-center mx-3">
                <div>
                  <h1 className="secondary_font">
                    中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文
                  </h1>
                </div>
              </Row>
            )}
            <Row className="four_oh_four_content button ">
              <Link className="nav-link nav-link-no-underline" to="">
                {locale === "zh-CN" && (
                  <button className="submit_button">回家</button>
                )}
                {locale !== "zh-CN" && (
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

export default withRouter(ThankYou);
