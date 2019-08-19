import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../home/Home.css";
import { Link } from "react-router-dom";

class DemoCallToAction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="demo-cta-container">
        <Row className="demo-cta-content center-in-row">
          <h1 className="primary_font demo-cta-title-text text-white">
              Ready to get started? Our team is here to help.
          </h1>
        </Row>
        <Row className="demo-cta-content">
          <Link to="demo">
            <button className="nav-link-button sharp-corners-button btn btn-primary submit_button">
              Get started
            </button>
          </Link>
        </Row>
      </div>
    );
  }
}
export default DemoCallToAction;
