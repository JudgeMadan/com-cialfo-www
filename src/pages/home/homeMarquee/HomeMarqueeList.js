import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeMarqueeListObject from "./homeMarqueeListObject/HomeMarqueeListObject";

class HomeMarqueeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="testContentPink">
        <HomeMarqueeListObject />
        <HomeMarqueeListObject />
        <HomeMarqueeListObject />
        <HomeMarqueeListObject />
      </div>
    );
  }
}
export default HomeMarqueeList;
