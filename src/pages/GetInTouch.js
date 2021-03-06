import Row from "react-bootstrap/Row";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./getADemo/GetADemo.css";
import GetInTouchImg from "../img/GetInTouch.svg";
import FeaturesSubfooter from "./features/featuresSharedComponents/FeaturesSubfooter";
import * as contentful from "contentful";
import GetInTouchContactArray from "./getInTouch/GetInTouchContactArray";
import MobileGetInTouchContactArray from "./getInTouch/MobileGetInTouchContactArray";
import GrayLines from "../img/GrayLines.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";

class GetInTouch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      organization: "",
      studentAmount: "",
      height: window.innerHeight,
      width: window.innerWidth
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

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.fetchGetADemo().then(this.setGetADemo);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.fetchGetADemo().then(this.setGetADemo);
    }
  }

  fetchGetADemo = () => {
    return this.client.getEntries({
      content_type: "getInTouch",
      locale: this.props.match.params.locale
    });
  };

  setGetADemo = response => {
    const sendingPageContent = response.items[0].fields;
    for (let key in sendingPageContent) {
      if (typeof sendingPageContent[key] === "string") {
        this.setState({
          [key]: sendingPageContent[key]
        });
      } else if (Array.isArray(sendingPageContent[key])) {
        this.setState({
          [key]: sendingPageContent[key]
        });
      } else {
        this.setState({
          [key]: sendingPageContent[key].fields.file.url
        });
      }
    }
  };

  formChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
    e.preventDefault();
  };

  submitForm = e => {
    e.preventDefault();
    fetch("https://cialfo51705.activehosted.com/proc.php", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/json"
      },
      body: e.target || null
    }).then(function (response) { });
  };

  render() {
    return (
      <div>
        {/* FULL WIDTH HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="demoTextImgContainer">
            <img className="demo-get-in-touch-gray-lines" src={GrayLines} />
            <img className="blue-header-svg" src={GetInTouchImg} />
          </Row>
          <Row className="center-in-row">
            <Container className="center-in-row get-in-touch-array-container">
              <GetInTouchContactArray
                contactArray={this.state.getInTouchContactInfo}
              />
            </Container>
          </Row>
          <Row className="demoTextTitleContainer secondary_font">
            <h1 className="demoTextTitle">{this.state.getADemoTitle}</h1>
          </Row>
        </MediaQuery>
        {/* MOBILE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="demoTextImgContainer">
            <img
              className="mobile-demo-get-in-touch-gray-lines"
              src={GrayLines}
            />
            <img
              className="mobile-get-a-demo-blue-header-svg"
              src={GetInTouchImg}
            />
          </Row>
          <Container className="mobile-getInTouchContactArrayContainer my-3">
            <MobileGetInTouchContactArray
              contactArray={this.state.getInTouchContactInfo}
            />
          </Container>
        </MediaQuery>
        {/* MOBILE  FORM */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-get_in_touch_container">
            <form
              method="POST"
              action="https://cialfo.activehosted.com/proc.php"
              id="_form_44_"
              class="_form _form_44 _inline-form  _dark"
              valid
            >
              <input type="hidden" name="u" value="44" />
              <input type="hidden" name="f" value="44" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <div class="_form-content">
                <Row className="title_row">
                  <div className="_form_element _x79800219 _full_width _clear primary_font form_title_container">
                    <div className="_form-title primary_font form_title">
                      {this.state.getInTouchFormTitle}
                    </div>
                  </div>
                </Row>
                <Row className="get-in-touch-row ">
                  <div class="_form_element _x63413749 _full_width center-in-row">
                    <label class="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.getInTouchFullName}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="firstname"
                        placeholder={this.state.getInTouchFullNamePlaceholder}
                        className="input_style"
                        required
                      />
                    </div>
                  </div>
                </Row>
                <Row className="get-in-touch-row ">
                  <div class="_form_element _x03648776 _full_width mobile-get-in-touch-form-header center-in-row">
                    <label class="_form-label">
                      {this.state.getInTouchLastName}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="lastname"
                        placeholder={this.state.getInTouchLastNamePlaceholder}
                        className="input_style"
                        required
                      />
                    </div>
                  </div>
                </Row>
                <Row className="get-in-touch-row">
                  <div class="_form_element _x92760902 _full_width center-in-row">
                    <label class="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.getInTouchEmail}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="email"
                        name="email"
                        placeholder={this.state.getInTouchEmailPlaceholder}
                        required
                        className="input_style"
                        required
                      />
                    </div>
                  </div>
                </Row>
                <Row className="get-in-touch-row">
                  <div class="_form_element _x28890866 _full_width center-in-row">
                    <label class="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.getInTouchPhone}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="phone"
                        placeholder={this.state.getInTouchPhonePlaceholder}
                        className="input_style"
                        required
                      />
                    </div>
                  </div>
                </Row>
                <Row className="get-in-touch-row">
                  <div class="_form_element _field170 _full_width ">
                    <label class="_form-label mobile-get-in-touch-form-header">
                      {this.state.getInTouchMessage}
                    </label>
                    <div class="_field-wrapper">
                      <textarea
                        name="field[170]"
                        placeholder={this.state.getInTouchMessagePlaceholder}
                        className="mobile-textarea_style"
                        rows="5"
                        cols="43"
                        required
                      />
                    </div>
                  </div>
                </Row>
                <Row className="get-in-touch-row mb-5">
                  <div class="_button-wrapper _full_width">
                    <Button
                      id="_form_44_submit"
                      className="_submit nav-link-button sharp-corners-button demo-button mt-2"
                      type="submit"
                      variant="primary"
                    >
                      Submit
                    </Button>
                  </div>
                  <div class="_clear-element" />
                </Row>
              </div>
            </form>
          </Container>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1224px)">
          {this.state.width > 1000 && (
            <Container className="get_in_touch_container">
              <form
                method="POST"
                action="https://cialfo.activehosted.com/proc.php"
                id="_form_44_"
                class="_form _form_44 _inline-form  _dark get_in_touch_object"
                validate
              >
                <input type="hidden" name="u" value="44" />
                <input type="hidden" name="f" value="44" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <div class="_form-content">
                  <Row className="title_row">
                    <div className="_form_element _full_width _clear primary_font form_title_container">
                      <div className="_form-title primary_font form_title">
                        {this.state.getInTouchFormTitle}
                      </div>
                    </div>
                  </Row>
                  <Row className="get-in-touch-row ">
                    <div class="_form_element _x63413749 _full_width lower_left_content_row">
                      <label class="_form-label secondary_fon">
                        {this.state.getInTouchFullName}
                      </label>
                      <div class="_field-wrapper">
                        <input
                          type="text"
                          name="firstname"
                          placeholder={this.state.getInTouchFullNamePlaceholder}
                          className="input_style"
                          required
                        />
                      </div>
                    </div>
                    <div class="_form_element _x03648776 _full_width lower_left_content_row">
                      <label class="_form-label">
                        {this.state.getInTouchLastName}
                      </label>
                      <div class="_field-wrapper">
                        <input
                          type="text"
                          name="lastname"
                          placeholder={this.state.getInTouchLastNamePlaceholder}
                          className="input_style"
                          required
                        />
                      </div>
                    </div>
                  </Row>
                  <Row className="get-in-touch-row">
                    <div class="_form_element _x92760902 _full_width lower_left_content_row">
                      <label class="_form-label">
                        {this.state.getInTouchEmail}
                      </label>
                      <div class="_field-wrapper">
                        <input
                          type="email"
                          name="email"
                          placeholder={this.state.getInTouchEmailPlaceholder}
                          required
                          className="input_style"
                        />
                      </div>
                    </div>
                    <div class="_form_element _x28890866 _full_width lower_left_content_row">
                      <label class="_form-label">
                        {this.state.getInTouchPhone}
                      </label>
                      <div class="_field-wrapper">
                        <input
                          type="text"
                          name="phone"
                          placeholder={this.state.getInTouchPhonePlaceholder}
                          className="input_style"
                          required
                        />
                      </div>
                    </div>
                  </Row>
                  <Row className="get-in-touch-row full-screen-text-area">
                    <div class="_form_element _field170 _full_width">
                      <label class="_form-label">
                        {this.state.getInTouchMessage}
                      </label>
                      <div class="_field-wrapper">
                        <textarea
                          name="field[170]"
                          placeholder={this.state.getInTouchMessagePlaceholder}
                          className="textarea_style"
                          rows="5"
                          cols="80"
                          required
                        />
                      </div>
                    </div>
                  </Row>
                  <Row className="get-in-touch-row mb-5">
                    <div class="_button-wrapper _full_width">
                      <Button
                        id="_form_44_submit"
                        className="_submit nav-link-button sharp-corners-button demo-button mt-2"
                        type="submit"
                        variant="primary"
                      >
                        Submit
                      </Button>
                    </div>
                    <div class="_clear-element" />
                  </Row>
                </div>
              </form>
            </Container>
          )}
          {this.state.width <= 1000 && (
            <Container className="contact-demo-form-object-container">
              <div className="contact-demo_form_container">
                <form
                  method="POST"
                  action="https://cialfo.activehosted.com/proc.php"
                  id="_form_44_"
                  class="_form _form_44 _inline-form  _dark get_in_touch_object"
                  validate
                >
                  <input type="hidden" name="u" value="44" />
                  <input type="hidden" name="f" value="44" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />
                  <div class="_form-content get-in-touch-title_row">
                    <Row className="title_row">
                      <div className="_form_element _full_width _clear primary_font form_title_container">
                        <div className="_form-title primary_font form_title">
                          {this.state.getInTouchFormTitle}
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row center-in-row mt-3">
                      <div class="_form_element _x63413749 _full_width center-in-row">
                        <label class="_form-label secondary_fon">
                          {this.state.getInTouchFullName}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="firstname"
                            placeholder={
                              this.state.getInTouchFullNamePlaceholder
                            }
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="center-in-row mt-3">
                      <div class="_form_element _x03648776 _full_width center-in-row">
                        <label class="_form-label">
                          {this.state.getInTouchLastName}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="lastname"
                            placeholder={
                              this.state.getInTouchLastNamePlaceholder
                            }
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row center-in-row mt-3">
                      <div class="_form_element _x92760902 _full_width center-in-row">
                        <label class="_form-label">
                          {this.state.getInTouchEmail}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="email"
                            name="email"
                            placeholder={this.state.getInTouchEmailPlaceholder}
                            required
                            className="input_style"
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row center-in-row mt-3">
                      <div class="_form_element _x28890866 _full_width center-in-row">
                        <label class="_form-label">
                          {this.state.getInTouchPhone}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="phone"
                            placeholder={this.state.getInTouchPhonePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row center-in-row mt-3">
                      <div class="_form_element _field170 _full_width ">
                        <label class="_form-label">
                          {this.state.getInTouchMessage}
                        </label>
                        <div class="_field-wrapper">
                          <textarea
                            name="field[170]"
                            placeholder={
                              this.state.getInTouchMessagePlaceholder
                            }
                            className="small-textarea_style"
                            rows="5"
                            cols="43"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row">
                      <div class="_button-wrapper _full_width">
                        <Button
                          id="_form_44_submit"
                          className="_submit nav-link-button sharp-corners-button demo-button mt-2"
                          type="submit"
                          variant="primary"
                        >
                          Submit
                        </Button>
                      </div>
                      <div class="_clear-element" />
                    </Row>
                  </div>
                </form>
              </div>
            </Container>
          )}
        </MediaQuery>
      </div>
    );
  }
}

export default withRouter(GetInTouch);
