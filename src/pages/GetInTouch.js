import Row from "react-bootstrap/Row";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./getADemo/GetADemo.css";
import GetInTouchImg from "../img/GetInTouch.svg";
import FeaturesSubfooter from "./features/featuresSharedComponents/FeaturesSubfooter";
import GetInTouchContactArray from "./getInTouch/GetInTouchContactArray";
import MobileGetInTouchContactArray from "./getInTouch/MobileGetInTouchContactArray";
import GrayLines from "../img/GrayLines.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import { DataContext } from "../contexts/DataContext"

class GetInTouch extends React.Component {
  static contextType = DataContext;

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
      width: window.innerWidth,
      data: {},
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.context.fetchEntries("getInTouch").then((response) => {
      let data = this.context.setContent(response)
      this.setState({
        data: data
      })
    });
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
      this.context.fetchEntries("getInTouch").then((response) => {
        let data = this.context.setContent(response)
        this.setState({
          data: data
        })
      });
    }
  }

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
                contactArray={this.state.data.getInTouchContactInfo}
              />
            </Container>
          </Row>
          <Row className="demoTextTitleContainer secondary_font">
            <h1 className="demoTextTitle">{this.state.data.getADemoTitle}</h1>
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
              contactArray={this.state.data.getInTouchContactInfo}
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
                      {this.state.data.getInTouchFormTitle}
                    </div>
                  </div>
                </Row>
                <Row className="get-in-touch-row ">
                  <div class="_form_element _x63413749 _full_width center-in-row">
                    <label class="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.data.getInTouchFullName}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="firstname"
                        placeholder={this.state.data.getInTouchFullNamePlaceholder}
                        className="input_style"
                        required
                      />
                    </div>
                  </div>
                </Row>
                <Row className="get-in-touch-row ">
                  <div class="_form_element _x03648776 _full_width mobile-get-in-touch-form-header center-in-row">
                    <label class="_form-label">
                      {this.state.data.getInTouchLastName}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="lastname"
                        placeholder={this.state.data.getInTouchLastNamePlaceholder}
                        className="input_style"
                        required
                      />
                    </div>
                  </div>
                </Row>
                <Row className="get-in-touch-row">
                  <div class="_form_element _x92760902 _full_width center-in-row">
                    <label class="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.data.getInTouchEmail}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="email"
                        name="email"
                        placeholder={this.state.data.getInTouchEmailPlaceholder}
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
                      {this.state.data.getInTouchPhone}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="phone"
                        placeholder={this.state.data.getInTouchPhonePlaceholder}
                        className="input_style"
                        required
                      />
                    </div>
                  </div>
                </Row>
                <Row className="get-in-touch-row">
                  <div class="_form_element _field170 _full_width ">
                    <label class="_form-label mobile-get-in-touch-form-header">
                      {this.state.data.getInTouchMessage}
                    </label>
                    <div class="_field-wrapper">
                      <textarea
                        name="field[170]"
                        placeholder={this.state.data.getInTouchMessagePlaceholder}
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
                        {this.state.data.getInTouchFormTitle}
                      </div>
                    </div>
                  </Row>
                  <Row className="get-in-touch-row ">
                    <div class="_form_element _x63413749 _full_width lower_left_content_row">
                      <label class="_form-label secondary_fon">
                        {this.state.data.getInTouchFullName}
                      </label>
                      <div class="_field-wrapper">
                        <input
                          type="text"
                          name="firstname"
                          placeholder={this.state.data.getInTouchFullNamePlaceholder}
                          className="input_style"
                          required
                        />
                      </div>
                    </div>
                    <div class="_form_element _x03648776 _full_width lower_left_content_row">
                      <label class="_form-label">
                        {this.state.data.getInTouchLastName}
                      </label>
                      <div class="_field-wrapper">
                        <input
                          type="text"
                          name="lastname"
                          placeholder={this.state.data.getInTouchLastNamePlaceholder}
                          className="input_style"
                          required
                        />
                      </div>
                    </div>
                  </Row>
                  <Row className="get-in-touch-row">
                    <div class="_form_element _x92760902 _full_width lower_left_content_row">
                      <label class="_form-label">
                        {this.state.data.getInTouchEmail}
                      </label>
                      <div class="_field-wrapper">
                        <input
                          type="email"
                          name="email"
                          placeholder={this.state.data.getInTouchEmailPlaceholder}
                          required
                          className="input_style"
                        />
                      </div>
                    </div>
                    <div class="_form_element _x28890866 _full_width lower_left_content_row">
                      <label class="_form-label">
                        {this.state.data.getInTouchPhone}
                      </label>
                      <div class="_field-wrapper">
                        <input
                          type="text"
                          name="phone"
                          placeholder={this.state.data.getInTouchPhonePlaceholder}
                          className="input_style"
                          required
                        />
                      </div>
                    </div>
                  </Row>
                  <Row className="get-in-touch-row full-screen-text-area">
                    <div class="_form_element _field170 _full_width">
                      <label class="_form-label">
                        {this.state.data.getInTouchMessage}
                      </label>
                      <div class="_field-wrapper">
                        <textarea
                          name="field[170]"
                          placeholder={this.state.data.getInTouchMessagePlaceholder}
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
                          {this.state.data.getInTouchFormTitle}
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row center-in-row mt-3">
                      <div class="_form_element _x63413749 _full_width center-in-row">
                        <label class="_form-label secondary_fon">
                          {this.state.data.getInTouchFullName}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="firstname"
                            placeholder={
                              this.state.data.getInTouchFullNamePlaceholder
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
                          {this.state.data.getInTouchLastName}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="lastname"
                            placeholder={
                              this.state.data.getInTouchLastNamePlaceholder
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
                          {this.state.data.getInTouchEmail}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="email"
                            name="email"
                            placeholder={this.state.data.getInTouchEmailPlaceholder}
                            required
                            className="input_style"
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row center-in-row mt-3">
                      <div class="_form_element _x28890866 _full_width center-in-row">
                        <label class="_form-label">
                          {this.state.data.getInTouchPhone}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="phone"
                            placeholder={this.state.data.getInTouchPhonePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row center-in-row mt-3">
                      <div class="_form_element _field170 _full_width ">
                        <label class="_form-label">
                          {this.state.data.getInTouchMessage}
                        </label>
                        <div class="_field-wrapper">
                          <textarea
                            name="field[170]"
                            placeholder={
                              this.state.data.getInTouchMessagePlaceholder
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
