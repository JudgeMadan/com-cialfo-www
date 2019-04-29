import Row from "react-bootstrap/Row";
import React from "react";
import Container from "react-bootstrap/Container";
import "./getADemo/GetADemo.css";
import DemoText from "./getADemo/GetADemo.png";
import FeaturesSubfooter from "./features/FeaturesSubfooter";
import * as contentful from "contentful";

class GetADemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      organization: "",
      studentAmount: ""
    };
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
    return this.client.getEntries({
      content_type: "getADemo",
      locale: this.props.locale
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
    console.log(this.state.email);
  };

  formChange = e => {
    const { id, value } = e.target;
    console.log(value);
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
    }).then(function(response) {
      console.log(response.status);
      console.log("response");
      console.log(response);
    });
    console.log(e.target.u.value);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Row className="demoTextImgContainer">
          <img className="demoTextImg" src={DemoText} />
        </Row>
        <Row className="demoTextTitleContainer secondary_font">
          <h1 className="demoTextTitle">{this.state.getADemoTitle}</h1>
        </Row>
        <Container className="demo_form_container">
          <form
            method="POST"
            action="https://cialfo51705.activehosted.com/proc.php"
            id="_form_2_"
            class="_form _form_2 _inline-form  _dark"
            novalidate
          >
            <input type="hidden" name="u" value="2" />
            <input type="hidden" name="f" value="2" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <div class="_form-content">
              <Row className="title_row">
                <div className="_form_element _x36013235 _full_width _clear primary_font form_title_container">
                  <div className="_form-title primary_font form_title">
                    {this.state.getADemoFormTitle}
                  </div>
                </div>
              </Row>
              <Row>
                <div class="_form_element _x18120362 _full_width left_content_row">
                  <label className="_form-label secondary_font">
                    {this.state.getADemoName}
                  </label>
                  <div class="_field-wrapper">
                    <input
                      type="text"
                      name="firstname"
                      placeholder={this.state.getADemoNamePlaceholder}
                      className="input_style"
                    />
                  </div>
                </div>
                <div class="_form_element _x44797314 _full_width ">
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
                    />
                  </div>
                </div>
              </Row>
              <Row>
                <div class="_form_element _x80848159 _full_width left_content_row">
                  <label class="_form-label secondary_font">
                    {this.state.getADemoOrg}
                  </label>
                  <div class="_field-wrapper">
                    <input
                      type="text"
                      name="organization"
                      placeholder={this.state.getADemoOrgPlaceholder}
                      className="input_style"
                    />
                  </div>
                </div>
                <div class="_form_element _x04697005 _full_width ">
                  <label class="_form-label secondary_font">
                    {this.state.getADemoMobile}
                  </label>
                  <div class="_field-wrapper">
                    <input
                      type="text"
                      name="phone"
                      placeholder={this.state.getADemoMobilePlaceholder}
                      className="input_style"
                    />
                  </div>
                </div>
              </Row>
              <Row>
                <div class="_form_element _x98882726 _full_width left_content_row">
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
                    />
                  </div>
                </div>
              </Row>
              <Row className="title_row">
                <div class="_button-wrapper _full_width">
                  <button
                    id="_form_2_submit"
                    className="_submit submit_button"
                    type="submit"
                  >
                    {this.state.getAdemoSubmitButtonText}
                  </button>
                </div>
              </Row>
              <div class="_clear-element" />
            </div>
            <div class="_form-thank-you" />
          </form>
        </Container>
        <Row>
          <FeaturesSubfooter
            img={this.state.getADemoSubfooterImg}
            quote={this.state.getADemoSubfooterQuote}
            quoteAuthor={this.state.getAdemoSubfooterQuoteAuthor}
          />
        </Row>
      </div>
    );
  }
}

export default GetADemo;
