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

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://cialfo51705.activehosted.com/f/embed.php?id=1";
    script.async = true;
    script.type = "text/javascript";
    script.charset = "utf-8";

    document.body.appendChild(script);
  }

  render() {
    return (
      <Container>
        <div class="_form_1" />
      </Container>
    );
  }
}

export default GetADemo;
