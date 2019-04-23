import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
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
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
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
    // console.log(response);
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

  // getADemo

  render() {
    console.log(this.state);
    return (
      <div>
        <Row className="demoTextImgContainer">
          <img className="demoTextImg" src={DemoText} />
        </Row>
        <form
          method="POST"
          onSubmit={e => this.submitForm(e)}
          // action="https://cialfo51705.activehosted.com/proc.php"
          id="_form_1_"
          className="_form _form_1 _inline-form _dark demo_form_container"
          novalidate=""
        >
          <input type="hidden" name="u" value="1" data-name="u" />
          <input type="hidden" name="f" value="1" data-name="f" />
          <input type="hidden" name="s" data-name="s" />
          <input type="hidden" name="c" value="0" data-name="c" />
          <input type="hidden" name="m" value="0" data-name="m" />
          <input type="hidden" name="act" value="sub" data-name="act" />
          <input type="hidden" name="v" value="2" data-name="v" />
          <div class="_form-content">
            <div className="_form_element _x65008066 _full_width _clear form_title_container">
              <div className="primary_font form_title">
                {this.state.getADemoFormTitle}
              </div>
            </div>
            <Row>
              <Col>
                <div class="_form_element _x05833667 _full_width ">
                  <label className="secondary_font">
                    {this.state.getADemoFirstName}
                  </label>
                  <div class="_field-wrapper">
                    <input
                      type="text"
                      name="fullname"
                      placeholder={this.state.getADemoFirstNamePlaceHolder}
                      data-name="fullname"
                    />
                  </div>
                </div>
              </Col>
              <Col>
                <div class="_form_element _x22732067 _full_width ">
                  <label className="secondary_font">
                    {this.state.getADemoSurname}
                  </label>
                  <div class="_field-wrapper">
                    <input
                      type="text"
                      name="email"
                      placeholder={this.state.getADemoSurnamePlaceholder}
                      required=""
                      data-name="email"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div class="_form_element _field1 _full_width ">
                  <label className="secondary_font">
                    {this.state.getADemoEmail}
                  </label>
                  <div class="_field-wrapper">
                    <input
                      type="text"
                      name="field[1]"
                      value=""
                      placeholder={this.state.getADemoEmailPlaceholder}
                      data-name="customemail"
                    />
                  </div>
                </div>
              </Col>
              <Col>
                <div class="_form_element _x67471486 _full_width ">
                  <label className="secondary_font">
                    {this.state.getADemoOrg}
                  </label>
                  <div className="_field-wrapper wrapper">
                    <input
                      type="text"
                      name="organization"
                      placeholder={this.state.getADemoOrgPlaceholder}
                      data-name="organization"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div class="_form_element _x94439414 _full_width ">
                  <label className="secondary_font">
                    {this.state.getADemoMobile}
                  </label>
                  <div class="_field-wrapper">
                    <input
                      type="text"
                      name="phone"
                      placeholder={this.state.getADemoMobilePlaceholder}
                      data-name="phone"
                    />
                  </div>
                </div>
              </Col>
              <Col>
                <div class="_form_element _field3 _full_width ">
                  <label className="secondary_font">
                    {this.state.getADemoNumberOfStudents}
                  </label>
                  <div class="_field-wrapper">
                    <input
                      type="text"
                      name="field[3]"
                      value=""
                      placeholder={
                        this.state.getADemoNumberOfStudentsPlaceholder
                      }
                      data-name="_of_students"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <div class="_button-wrapper _full_width submit_button_container">
              <button
                id="_form_1_submit"
                className="submit_button"
                type="submit"
              >
                {this.state.getAdemoSubmitButtonText}
              </button>
            </div>
          </div>
        </form>
        <Row>
          <FeaturesSubfooter
            img={this.state.getADemoSubfooterImg}
            quote={this.state.getADemoSubfooterQuote}
          />
        </Row>
      </div>
    );
  }
}

export default GetADemo;
