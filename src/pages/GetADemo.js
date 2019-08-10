import Row from "react-bootstrap/Row";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./getADemo/GetADemo.css";
import DemoText from "../img/GetADemo.svg";
import FeaturesSubfooter from "./features/featuresSharedComponents/FeaturesSubfooter";
import * as contentful from "contentful";
import GrayLines from "../img/GrayLines.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import { DataContext } from "../contexts/DataContext"

class GetADemo extends React.Component {
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
      data: {}
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.context.fetchEntries("getADemo").then((response) => {
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
      this.context.fetchEntries("getADemo").then((response) => {
        let data = this.context.setContent(response)
        this.setState({
          data: data
        })
      });
    }
  }

  handleChange = e => {
    const fieldContent = e.target.value;
    this.setState({
      email: fieldContent
    });
  };

  formChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
    e.preventDefault();
  };

  submitForm = e => {
    e.preventDefault();
    fetch("https://cialfo.activehosted.com/proc.php", {
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
        {/* FULL WIDTH GET A DEMO HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="demoTextImgContainer">
            <img className="blue-header-svg" src={DemoText} />
            <img className="demo-get-in-touch-gray-lines " src={GrayLines} />
          </Row>
          <Row className="demoTextTitleContainer secondary_font">
            <h1 className="demoTextTitle">{this.state.data.getADemoTitle}</h1>
          </Row>
        </MediaQuery>
        {/* MOBILE GET A DEMO HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="demoTextImgContainer">
            <img className="mobile-get-a-demo-blue-header-svg" src={DemoText} />
            <img
              className="mobile-demo-get-in-touch-gray-lines "
              src={GrayLines}
            />
          </Row>
          <Row className="demoTextTitleContainer secondary_font">
            <h1 className="mobile-demoTextTitle">{this.state.data.getADemoTitle}</h1>
          </Row>
        </MediaQuery>
        {/* FULL WIDTH GET A DEMO FORM */}
        <MediaQuery query="(min-device-width: 1224px)">
          {this.state.width > 1000 && (
            <Container className="demo-form-object-container">
              <div className="demo_form_container">
                <form
                  method="POST"
                  action="https://cialfo.activehosted.com/proc.php"
                  id="_form_45_"
                  class="_form _form_45 _inline-form  _dark"
                  validate
                >
                  <input type="hidden" name="u" value="45" />
                  <input type="hidden" name="f" value="45" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />
                  <div class="_form-content">
                    <Row className="title_row">
                      <div class="_form_element _x11159107 _full_width _clear primary_font form_title_container">
                        <div class="_form-title primary_font form_title">
                          {this.state.data.getADemoFormTitle}
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row">
                      <div class="_form_element _x06707072 _full_width left_content_row">
                        <label class="_form-label">
                          {this.state.data.getADemoName}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="firstname"
                            placeholder={this.state.data.getADemoNamePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                      <div class="_form_element _x61853092 _full_width ">
                        <label class="_form-label">
                          {this.state.data.getADemoLastName}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="lastname"
                            placeholder={this.state.data.getADemoLastNamePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row">
                      <div class="_form_element _x99442472 _full_width left_content_row">
                        <label class="_form-label secondary_font">
                          {this.state.data.getADemoEmail}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="email"
                            name="email"
                            placeholder="Type your email"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder={this.state.data.getADemoEmailPlaceholder}
                            className="input_style"
                          />
                        </div>
                      </div>
                      <div class="_form_element _x47659873 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.data.getADemoMobile}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="phone"
                            placeholder={this.state.data.getADemoMobilePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-last-row">
                      <div class="_form_element _x65466860 _full_width left_content_row">
                        <label class="_form-label">
                          {this.state.data.getADemoOrg}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="organization"
                            placeholder={this.state.data.getADemoOrgPlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                      <div class="_form_element _field116 _full_width ">
                        <label class="_form-label">
                          {this.state.data.getADemoNumberOfStudents}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="number"
                            name="field[4]"
                            placeholder={
                              this.state.data.getADemoNumberOfStudentsPlaceholder
                            }
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="title_row">
                      <div class="_button-wrapper _full_width">
                        <Button
                          id="_form_45_submit"
                          className="_submit nav-link-button sharp-corners-button demo-button"
                          type="submit"
                          variant="primary"
                        >
                          {this.state.data.getAdemoSubmitButtonText}
                        </Button>
                      </div>
                    </Row>
                    <div class="_clear-element" />
                  </div>
                  <div class="_form-thank-you" />
                </form>
              </div>
            </Container>
          )}
          {this.state.width <= 1000 && (
            <Container className="demo-form-object-container">
              <div className="demo_form_container">
                <form
                  method="POST"
                  action="https://cialfo.activehosted.com/proc.php"
                  id="_form_45_"
                  class="_form _form_45 _inline-form  _dark"
                  validate
                >
                  <input type="hidden" name="u" value="45" />
                  <input type="hidden" name="f" value="45" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />
                  <div class="_form-content">
                    <Row className="title_row primary_font form_title_container">
                      <div class="_form_element _x11159107 primary_font form_title">
                        <div class="_form-title">
                          {this.state.data.getADemoFormTitle}
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row mt-3 center-in-row">
                      <div class="_form_element _x06707072 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.data.getADemoName}
                        </label>
                        <div class="_field-wrapper demo-center-in-row">
                          <input
                            type="text"
                            name="firstname"
                            placeholder={this.state.data.getADemoNamePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row mt-3 center-in-row">
                      <div class="_form_element _x61853092 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.data.getADemoLastName}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="lastname"
                            placeholder={this.state.data.getADemoLastNamePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="mt-3 center-in-row">
                      <div class="_form_element _x99442472 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.data.getADemoEmail}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            value={this.state.data.email}
                            type="email"
                            name="email"
                            placeholder={this.state.data.getADemoEmailPlaceholder}
                            className="input_style"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="mt-3 center-in-row">
                      <div class="_form_element _x47659873 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.data.getADemoMobile}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="phone"
                            placeholder={this.state.data.getADemoMobilePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="mt-3 center-in-row">
                      <div class="_form_element _x65466860 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.data.getADemoOrg}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            name="organization"
                            placeholder={this.state.data.getADemoOrgPlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-last-row mt-3">
                      <div class="_form_element _field116 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.data.getADemoNumberOfStudents}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="number"
                            name="lastname"
                            placeholder={
                              this.state.data.getADemoNumberOfStudentsPlaceholder
                            }
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="title_row mt-3">
                      <div class="_button-wrapper _full_width">
                        <Button
                          id="_form_45_submit"
                          className="_submit nav-link-button sharp-corners-button demo-button"
                          type="submit"
                          variant="primary"
                        >
                          {this.state.data.getAdemoSubmitButtonText}
                        </Button>
                      </div>
                    </Row>
                    <div class="_clear-element" />
                  </div>
                  <div class="_form-thank-you" />
                </form>
              </div>
            </Container>
          )}
        </MediaQuery>
        {/* MOBILE GET A DEMO FORM */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="demo-form-object-container">
            <div className="mobile-demo_form_container demo-center-in-row">
              <form
                method="POST"
                action="https://cialfo.activehosted.com/proc.php"
                id="_form_45_"
                class="_form _form_45 _inline-form  _dark"
                validate
              >
                <input type="hidden" name="u" value="45" />
                <input type="hidden" name="f" value="45" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <Container class="_form-content demo-center-in-row">
                  <div className="_form_element _x11159107 _full_width _clear primary_font form_title_container">
                    <div className="_form-title primary_font form_title">
                      {this.state.data.getADemoFormTitle}
                    </div>
                  </div>
                  <div class="_form_element _x06707072 _full_width ">
                    <label className="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.data.getADemoName}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="firstname"
                        placeholder={this.state.data.getADemoNamePlaceholder}
                        className="mobile-input_style"
                        required
                      />
                    </div>
                  </div>
                  <div class="_form_element _x61853092 _full_width ">
                    <label className="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.data.getADemoLastName}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="firstname"
                        placeholder={this.state.data.getADemoLastNamePlaceholder}
                        className="mobile-input_style"
                        required
                      />
                    </div>
                  </div>
                  <div class="_form_element _x99442472 _full_width ">
                    <label class="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.data.getADemoEmail}
                    </label>
                    <div class="_field-wrapper mobile-demo-form-field-label">
                      <input
                        value={this.state.data.email}
                        type="email"
                        name="email"
                        placeholder={this.state.data.getADemoEmailPlaceholder}
                        className="mobile-input_style"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div class="_form_element _x47659873 _full_width ">
                    <label class="_form-label secondary_font">
                      {this.state.data.getADemoMobile}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="phone"
                        placeholder={this.state.data.getADemoMobilePlaceholder}
                        className="input_style"
                        required
                      />
                    </div>
                  </div>
                  <div class="_form_element _x65466860 _full_width ">
                    <label class="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.data.getADemoOrg}
                    </label>
                    <div class="_field-wrapper mobile-demo-form-field-label">
                      <input
                        type="text"
                        name="organization"
                        placeholder={this.state.data.getADemoOrgPlaceholder}
                        className="mobile-input_style"
                        required
                      />
                    </div>
                  </div>
                  <div class="_form_element _field116 _full_width ">
                    <label class="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.data.getADemoNumberOfStudents}
                    </label>
                    <div class="_field-wrapper mobile-demo-form-field-label">
                      <input
                        type="number"
                        name="lastname"
                        placeholder={
                          this.state.data.getADemoNumberOfStudentsPlaceholder
                        }
                        className="mobile-input_style"
                        required
                      />
                    </div>
                  </div>
                  <div class="_button-wrapper _full_width mobile-demo-form-field-label mobile-demo-form-submit-button">
                    <Button
                      id="_form_45_submit"
                      className="_submit nav-link-button sharp-corners-button demo-button"
                      type="submit"
                      variant="primary"
                    >
                      {this.state.data.getAdemoSubmitButtonText}
                    </Button>
                  </div>
                  <div class="_clear-element" />
                </Container>
                <div class="_form-thank-you" />
              </form>
            </div>
          </Container>
        </MediaQuery>
        {/* FULL WIDTH FEATURE SUBFOOTER */}
        {/* <MediaQuery query="(min-device-width: 1224px)">
          <Row>
            <FeaturesSubfooter
              img={this.state.data.getADemoSubfooterImg}
              quote={this.state.data.getADemoSubfooterQuote}
              quoteAuthor={this.state.data.getAdemoSubfooterQuoteAuthor}
            />
          </Row>
        </MediaQuery> */}
      </div>
    );
  }
}

export default withRouter(GetADemo);
