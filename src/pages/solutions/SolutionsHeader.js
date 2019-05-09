import React from "react";
import Row from "react-bootstrap/Row";
import "./solutions.css";

class SolutionsHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <div className="solutions-header">
        <Row className="solutions-title">
          <h1 className="primary_font">{this.props.title}</h1>
        </Row>
        <Row className="solutions-subtitle">
          <p className="secondary_font">{this.props.subtitle}</p>
        </Row>
      </div>
    );
  }
}

export default SolutionsHeader;
