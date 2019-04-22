import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import "./about/About.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
  formChange = e => {
    const { id, value } = e.target;
    console.log(value);
    this.setState({ [id]: value });
    e.preventDefault();
  };

  submitForm = () => {
    console.log(this.state);
  };

  componentWillMount() {
    const script = document.createElement("script");

    script.src = "https://cialfo51705.activehosted.com/f/embed.php?id=1";
    script.async = true;
    script.type = "text/javascript";
    script.charset = "utf-8";

    document.body.appendChild(script);
  }

  render() {
    return (
      <form
        method="POST"
        action="https://cialfo51705.activehosted.com/proc.php"
        id="_form_1_"
        class="_form _form_1 _inline-form  _dark"
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
          <div class="_form_element _x65008066 _full_width _clear">
            <div class="_form-title">Get a demo today!</div>
          </div>
          <div class="_form_element _x05833667 _full_width ">
            <label class="_form-label">First name</label>
            <div class="_field-wrapper">
              <input
                type="text"
                name="fullname"
                placeholder="First name"
                data-name="fullname"
              />
            </div>
          </div>
          <div class="_form_element _x22732067 _full_width ">
            <label class="_form-label">Surname*</label>
            <div class="_field-wrapper">
              <input
                type="text"
                name="email"
                placeholder="Surname"
                required=""
                data-name="email"
              />
            </div>
          </div>
          <div class="_form_element _field1 _full_width ">
            <label class="_form-label">email</label>
            <div class="_field-wrapper">
              <input
                type="text"
                name="field[1]"
                value=""
                placeholder="your email"
                data-name="customemail"
              />
            </div>
          </div>
          <div class="_form_element _x67471486 _full_width ">
            <label class="_form-label">Organization</label>
            <div class="_field-wrapper">
              <input
                type="text"
                name="organization"
                placeholder="Your organization name"
                data-name="organization"
              />
            </div>
          </div>
          <div class="_form_element _x94439414 _full_width ">
            <label class="_form-label">Phone</label>
            <div class="_field-wrapper">
              <input
                type="text"
                name="phone"
                placeholder="Type your phone number"
                data-name="phone"
              />
            </div>
          </div>
          <div class="_form_element _field3 _full_width ">
            <label class="_form-label"># of Students</label>
            <div class="_field-wrapper">
              <input
                type="text"
                name="field[3]"
                value=""
                placeholder=""
                data-name="_of_students"
              />
            </div>
          </div>
          <div class="_button-wrapper _full_width">
            <button id="_form_1_submit" class="_submit" type="submit">
              Submit
            </button>
          </div>
          <div class="_clear-element" />
        </div>
        <div class="_form-thank-you" />
      </form>
    );
  }
}

export default GetADemo;
