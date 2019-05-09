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
      <div>
        <Row className="solutions-title">
          <h1 className="primary_font">{this.props.title}</h1>
        </Row>
        <Row className="solutions-subtitle">
          <h5>{this.props.subtitle}</h5>
        </Row>
      </div>
    );
  }
}

export default SolutionsHeader;
