import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./solutions.css";

class MobileSolutionsHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="mobile-solutions-header mobile-bottom-border">
        <Row className="mobile-solutions-title">
          <h1 className="primary_font solutions-header-text">
            {this.props.title}
          </h1>
        </Row>
        <Row className="solutions-subtitle mx-3">
          <p className="secondary_font solutions-header-text">
            {this.props.subtitle}
          </p>
        </Row>
      </Container>
    );
  }
}

export default MobileSolutionsHeader;
