import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Container from "react-bootstrap/Container";
import "./getADemo/GetADemo.css";
import GetInTouchImg from "./getADemo/GetInTouch.png";
import FeaturesSubfooter from "./features/FeaturesSubfooter";
import * as contentful from "contentful";

class GetInTouch extends React.Component {
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
      content_type: "getInTouch",
      locale: this.props.locale
    });
  };

  setGetADemo = response => {
    const sendingPageContent = response.items[0].fields;
    console.log(sendingPageContent);
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
          <img className="demoTextImg" src={GetInTouchImg} />
        </Row>
        <Row className="demoTextTitleContainer secondary_font">
          <h1 className="demoTextTitle">{this.state.getADemoTitle}</h1>
        </Row>
        <Container className="demo_form_container">
          <form
            method="POST"
            action="https://cialfo51705.activehosted.com/proc.php"
            id="_form_3_"
            class="_form _form_3 _inline-form  _dark"
            novalidate
          >
            <input type="hidden" name="u" value="3" />
            <input type="hidden" name="f" value="3" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <div class="_form-content">
              <Row className="title_row">
                <div className="_form_element _x36013235 _full_width _clear primary_font form_title_container">
                  <div className="_form-title primary_font form_title">
                    Make an enquiry
                  </div>
                </div>
              </Row>
              <Row className="title_row">
                <div class="_form_element _x11005730 _full_width left_content_row middle_row">
                  <label class="_form-label secondary_font">Full Name</label>
                  <div class="_field-wrapper">
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Type your name"
                      className="input_style"
                    />
                  </div>
                </div>
                <div class="_form_element _x78348353 _full_width ">
                  <label class="_form-label secondary_font">Email</label>
                  <div class="_field-wrapper">
                    <input
                      type="text"
                      name="email"
                      placeholder="Type your email"
                      className="input_style"
                    />
                  </div>
                </div>
              </Row>
              <Row className="middle_row">
                <div class="_form_element _x11676591 _full_width left_content_row middle_row">
                  <label class="_form-label secondary_font">Phone</label>
                  <div class="_field-wrapper">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Type your phone number"
                      className="input_style"
                    />
                  </div>
                </div>
              </Row>
              <Row>
                <div class="_form_element _x99841330 _full_width left_content_row">
                  <label class="_form-label secondary_font">Organization</label>
                  <div class="_field-wrapper">
                    <textarea
                      type="text"
                      name="organization"
                      placeholder="Type your organization"
                      className="textarea_style"
                      rows="5"
                      cols="43"
                    />
                  </div>
                </div>
              </Row>
              <Row className="title_row">
                <div class="_button-wrapper _full_width">
                  <button
                    id="_form_3_submit"
                    className="_submit submit_button"
                    type="submit"
                  >
                    Submit
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
          />
        </Row>
      </div>
    );
  }
}

export default GetInTouch;
