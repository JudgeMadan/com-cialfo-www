import Row from "react-bootstrap/Row";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./getADemo/GetADemo.css";
import DemoText from "../img/GetADemo.svg";
import FeaturesSubfooter from "./features/FeaturesSubfooter";
import * as contentful from "contentful";
import GrayLines from "../img/GrayLines.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";

class GetADemo extends React.Component {
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
    accessToken: this.setAccessToken()
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
      content_type: "getADemo",
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
    this.setState({
      email: this.props.getADemoEmail
    });
  };

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
    console.log(this.state)
    return (
      <div>
        {/* FULL WIDTH GET A DEMO HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="demoTextImgContainer">
            <img className="blue-header-svg" src={DemoText} />
            <img className="demo-get-in-touch-gray-lines " src={GrayLines} />
          </Row>
          <Row className="demoTextTitleContainer secondary_font">
            <h1 className="demoTextTitle">{this.state.getADemoTitle}</h1>
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
            <h1 className="mobile-demoTextTitle">{this.state.getADemoTitle}</h1>
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
                          {this.state.getADemoFormTitle}
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row">
                      <div class="_form_element _x06707072 _full_width left_content_row">
                        <label class="_form-label">
                          {this.state.getADemoName}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="firstname"
                            placeholder={this.state.getADemoNamePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                      <div class="_form_element _x61853092 _full_width ">
                        <label class="_form-label">
                          {this.state.getADemoLastName}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="lastname"
                            placeholder={this.state.getADemoLastNamePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row">
                      <div class="_form_element _x99442472 _full_width left_content_row">
                        <label class="_form-label secondary_font">
                          {this.state.getADemoEmail}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="email"
                            name="email"
                            placeholder="Type your email"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder={this.state.getADemoEmailPlaceholder}
                            className="input_style"
                          />
                        </div>
                      </div>
                      <div class="_form_element _x47659873 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.getADemoMobile}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="phone"
                            placeholder={this.state.getADemoMobilePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row">
                      <div class="_form_element _x65466860 _full_width left_content_row">
                        <label class="_form-label" >
                          {this.state.getADemoOrg}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="organization"
                            placeholder={this.state.getADemoOrgPlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                      <div class="_form_element _field116 _full_width ">
                        <label class="_form-label">
                          {this.state.getADemoNumberOfStudents}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="number"
                            name="field[4]"
                            placeholder={
                              this.state.getADemoNumberOfStudentsPlaceholder
                            }
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row">
                      <div class="_form_element _field30 _full_width left_content_row" >
                        <label class="_form-label">
                          {this.state.getADemoJobTitle}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            className="input_style"
                            type="text"
                            name="field[30]"
                            placeholder={
                              this.state.getADemoJobTitle
                            }
                            required
                          />
                        </div>
                      </div>
                      <div class="_form_element _field171 _full_width " >
                        <label class="_form-label">
                          {this.state.getADemoLocation}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            className="input_style"
                            type="text"
                            name="field[171]"
                            placeholder={
                              this.state.getADemoLocation
                            }
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row get-in-touch-bottom-row">
                      <div class="_form_element _field172 _full_width left_content_row" >
                        <label class="_form-label">
                          {this.state.getADemoOrganizationType}
                        </label>
                        <div class="_row _checkbox-radio">
                          <input id="field_172Public School" type="radio" name="field[172]" value="Public School" />
                          <span>
                            <label for="field_172Public School">
                              &nbsp; {this.state.getADemoPublicSchool}
                            </label>
                          </span>
                        </div>
                        <div class="_row _checkbox-radio">
                          <input id="field_172Independent School" type="radio" name="field[172]" value="Independent School" />
                          <span>
                            <label for="field_172Independent School">
                              &nbsp; {this.state.getADemoIndependentSchool}
                            </label>
                          </span>
                        </div>
                        <div class="_row _checkbox-radio">
                          <input id="field_172School District" type="radio" name="field[172]" value="School District" />
                          <span>
                            <label for="field_172School District">
                              &nbsp; {this.state.getADemoSchoolDistrict}
                            </label>
                          </span>
                        </div>
                        <div class="_row _checkbox-radio">
                          <input id="field_172Independent Consultant" type="radio" name="field[172]" value="Independent Consultant" />
                          <span>
                            <label for="field_172Independent Consultant">
                              &nbsp; {this.state.getADemoIndependentConsultant}
                            </label>
                          </span>
                        </div>
                      </div>
                      <div class="_form_element _field173 _full_width half-width-text-area " >
                        <div>
                          <label class="_form-label">
                            {this.state.getADemoWhyAreYouHere}
                          </label>
                        </div>
                        <div class="_field-wrapper">
                          <textarea
                            name="field[173]"
                            placeholder=""
                            className="textarea_style"
                            rows="5"
                            cols="34"
                          >

                          </textarea>
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
                          {this.state.getAdemoSubmitButtonText}
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
                          {this.state.getADemoFormTitle}
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row mt-3 center-in-row">
                      <div class="_form_element _x06707072 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.getADemoName}
                        </label>
                        <div class="_field-wrapper demo-center-in-row">
                          <input
                            type="text"
                            name="firstname"
                            placeholder={this.state.getADemoNamePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="get-in-touch-row mt-3 center-in-row">
                      <div class="_form_element _x61853092 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.getADemoLastName}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="lastname"
                            placeholder={this.state.getADemoLastNamePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="mt-3 center-in-row">
                      <div class="_form_element _x99442472 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.getADemoEmail}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            value={this.state.email}
                            type="email"
                            name="email"
                            placeholder={this.state.getADemoEmailPlaceholder}
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
                          {this.state.getADemoMobile}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="text"
                            name="phone"
                            placeholder={this.state.getADemoMobilePlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="mt-3 center-in-row">
                      <div class="_form_element _x65466860 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.getADemoOrg}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            name="organization"
                            placeholder={this.state.getADemoOrgPlaceholder}
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="mt-3 center-in-row">
                      <div class="_form_element _field116 _full_width ">
                        <label class="_form-label secondary_font">
                          {this.state.getADemoNumberOfStudents}
                        </label>
                        <div class="_field-wrapper">
                          <input
                            type="number"
                            name="lastname"
                            placeholder={
                              this.state.getADemoNumberOfStudentsPlaceholder
                            }
                            className="input_style"
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="mt-3 center-in-row">
                      <div class="_form_element _field30 _full_width" >
                        <label class="_form-label">
                          Job Title
                        </label>
                        <div class="_field-wrapper">
                          <input
                            className="input_style"
                            type="text"
                            name="field[30]"
                            placeholder={
                              this.state.getADemoNumberOfStudentsPlaceholder
                            }
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="mt-3 center-in-row">
                      <div class="_form_element _field171 _full_width " >
                        <label class="_form-label">
                          Location
                        </label>
                        <div class="_field-wrapper">
                          <input
                            className="input_style"
                            type="text"
                            name="field[171]"
                            placeholder={
                              this.state.getADemoNumberOfStudentsPlaceholder
                            }
                            required
                          />
                        </div>
                      </div>
                    </Row>
                    <Row className="mt-3 center-in-row">
                      <div class="_form_element _field172 _full_width left_content_row" >
                        <label class="_form-label">
                          Organization Type
                        </label>
                        <div class="_row _checkbox-radio">
                          <input id="field_172Public School" type="radio" name="field[172]" value="Public School" />
                          <span>
                            <label for="field_172Public School">
                              &nbsp; Public School
                            </label>
                          </span>
                        </div>
                        <div class="_row _checkbox-radio">
                          <input id="field_172Independent School" type="radio" name="field[172]" value="Independent School" />
                          <span>
                            <label for="field_172Independent School">
                              &nbsp; Independent School
                            </label>
                          </span>
                        </div>
                        <div class="_row _checkbox-radio">
                          <input id="field_172School District" type="radio" name="field[172]" value="School District" />
                          <span>
                            <label for="field_172School District">
                              &nbsp; School District
                            </label>
                          </span>
                        </div>
                        <div class="_row _checkbox-radio">
                          <input id="field_172Independent Consultant" type="radio" name="field[172]" value="Independent Consultant" />
                          <span>
                            <label for="field_172Independent Consultant">
                              &nbsp; Independent Consultant
                            </label>
                          </span>
                        </div>
                      </div>
                    </Row>
                    <Row className="mt-3 center-in-row">
                      <div class="_form_element _field173 _full_width" >
                        <div>
                          <label class="_form-label">
                            Why are you here?
                          </label>
                        </div>
                        <div class="_field-wrapper">
                          <textarea
                            name="field[173]"
                            placeholder=""
                            className="textarea_style"
                            rows="5"
                            cols="34"
                          >

                          </textarea>
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
                          {this.state.getAdemoSubmitButtonText}
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
                      {this.state.getADemoFormTitle}
                    </div>
                  </div>
                  <div class="_form_element _x06707072 _full_width ">
                    <label className="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.getADemoName}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="firstname"
                        placeholder={this.state.getADemoNamePlaceholder}
                        className="mobile-input_style"
                        required
                      />
                    </div>
                  </div>
                  <div class="_form_element _x61853092 _full_width ">
                    <label className="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.getADemoLastName}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="firstname"
                        placeholder={this.state.getADemoLastNamePlaceholder}
                        className="mobile-input_style"
                        required
                      />
                    </div>
                  </div>
                  <div class="_form_element _x99442472 _full_width ">
                    <label class="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.getADemoEmail}
                    </label>
                    <div class="_field-wrapper mobile-demo-form-field-label">
                      <input
                        value={this.state.email}
                        type="email"
                        name="email"
                        placeholder={this.state.getADemoEmailPlaceholder}
                        className="mobile-input_style"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div class="_form_element _x47659873 _full_width ">
                    <label class="_form-label secondary_font">
                      {this.state.getADemoMobile}
                    </label>
                    <div class="_field-wrapper">
                      <input
                        type="text"
                        name="phone"
                        placeholder={this.state.getADemoMobilePlaceholder}
                        className="input_style"
                        required
                      />
                    </div>
                  </div>
                  <div class="_form_element _x65466860 _full_width ">
                    <label class="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.getADemoOrg}
                    </label>
                    <div class="_field-wrapper mobile-demo-form-field-label">
                      <input
                        type="text"
                        name="organization"
                        placeholder={this.state.getADemoOrgPlaceholder}
                        className="mobile-input_style"
                        required
                      />
                    </div>
                  </div>
                  <div class="_form_element _field116 _full_width ">
                    <label class="_form-label secondary_font mobile-get-in-touch-form-header">
                      {this.state.getADemoNumberOfStudents}
                    </label>
                    <div class="_field-wrapper mobile-demo-form-field-label">
                      <input
                        type="number"
                        name="lastname"
                        placeholder={
                          this.state.getADemoNumberOfStudentsPlaceholder
                        }
                        className="mobile-input_style"
                        required
                      />
                    </div>
                  </div>
                  <Row className="mt-3 center-in-row">
                    <div class="_form_element _field30 _full_width" >
                      <label class="_form-label">
                        Job Title
                        </label>
                      <div class="_field-wrapper">
                        <input
                          className="input_style"
                          type="text"
                          name="field[30]"
                          placeholder={
                            this.state.getADemoNumberOfStudentsPlaceholder
                          }
                          required
                        />
                      </div>
                    </div>
                  </Row>
                  <Row className="mt-3 center-in-row">
                    <div class="_form_element _field171 _full_width " >
                      <label class="_form-label">
                        Location
                        </label>
                      <div class="_field-wrapper">
                        <input
                          className="input_style"
                          type="text"
                          name="field[171]"
                          placeholder={
                            this.state.getADemoNumberOfStudentsPlaceholder
                          }
                          required
                        />
                      </div>
                    </div>
                  </Row>
                  <Row className="mt-3 center-in-row">
                    <div class="_form_element _field172 _full_width left_content_row" >
                      <label class="_form-label">
                        Organization Type
                        </label>
                      <div class="_row _checkbox-radio">
                        <input id="field_172Public School" type="radio" name="field[172]" value="Public School" />
                        <span>
                          <label for="field_172Public School">
                            &nbsp; Public School
                            </label>
                        </span>
                      </div>
                      <div class="_row _checkbox-radio">
                        <input id="field_172Independent School" type="radio" name="field[172]" value="Independent School" />
                        <span>
                          <label for="field_172Independent School">
                            &nbsp; Independent School
                            </label>
                        </span>
                      </div>
                      <div class="_row _checkbox-radio">
                        <input id="field_172School District" type="radio" name="field[172]" value="School District" />
                        <span>
                          <label for="field_172School District">
                            &nbsp; School District
                            </label>
                        </span>
                      </div>
                      <div class="_row _checkbox-radio">
                        <input id="field_172Independent Consultant" type="radio" name="field[172]" value="Independent Consultant" />
                        <span>
                          <label for="field_172Independent Consultant">
                            &nbsp; Independent Consultant
                            </label>
                        </span>
                      </div>
                    </div>
                  </Row>
                  <Row className="mt-3 center-in-row">
                    <div class="_form_element _field173 _full_width" >
                      <div>
                        <label class="_form-label">
                          Why are you here?
                          </label>
                      </div>
                      <div class="_field-wrapper">
                        <textarea
                          name="field[173]"
                          placeholder=""
                          className="textarea_style"
                          rows="5"
                          cols="36"
                        >

                        </textarea>
                      </div>
                    </div>
                  </Row>
                  <div class="_button-wrapper _full_width mobile-demo-form-field-label mobile-demo-form-submit-button">
                    <Button
                      id="_form_45_submit"
                      className="_submit nav-link-button sharp-corners-button demo-button"
                      type="submit"
                      variant="primary"
                    >
                      {this.state.getAdemoSubmitButtonText}
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
              img={this.state.getADemoSubfooterImg}
              quote={this.state.getADemoSubfooterQuote}
              quoteAuthor={this.state.getAdemoSubfooterQuoteAuthor}
            />
          </Row>
        </MediaQuery> */}
      </div>
    );
  }
}

export default withRouter(GetADemo);
