import React from "react";
import HomeMarqueeListObject from "./homeMarqueeListObject/HomeMarqueeListObject";

class HomeMarqueeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomeMarqueeListObject />
        <HomeMarqueeListObject />
        <HomeMarqueeListObject />
        <HomeMarqueeListObject />
      </div>
    );
  }
}
export default HomeMarqueeList;
