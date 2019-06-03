import React from "react";
import Row from "react-bootstrap/Row";
import "./solutions.css";
import Line from "../../img/Line.svg";
import BlueStroke10 from "../../img/BlueStroke10.svg";
import Oval from "../../img/Oval.svg";

class SolutionsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
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

  render() {
    return (
      <div className="solutions-header">
        <Row className="solutions-title">
          <h1 className="primary_font solutions-header-text">
            {this.props.title}
          </h1>
        </Row>
        <Row className="solutions-subtitle">
          {this.props.isSolutionsPage && (
            <img className="solutions-oval" src={Oval} />
          )}
          {this.props.isSolutionsPage && (
            <img className="solutions-blue-stroke-10" src={BlueStroke10} />
          )}
          {this.props.isSolutionsPage && (
            <img className="solutions-line" src={Line} />
          )}
          <p className="secondary_font solutions-header-text">
            {this.props.subtitle}
          </p>
        </Row>
      </div>
    );
  }
}

export default SolutionsHeader;
