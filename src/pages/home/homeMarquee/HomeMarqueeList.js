import React from "react";
import HomeMarqueeListObject from "./homeMarqueeList/HomeMarqueeListObject";
import { withRouter } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext"

class HomeMarqueeList extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries().then(this.setContent2);
    }
  }

  componentDidMount() {
    this.context.fetchEntries().then(this.setContent2)
  }

  setContent2 = response => {
    let filteredContent = response.filter(
      content => content.sys.contentType.sys.id === "marqueeItem"
    )
    this.setState({
      marqueeItemArray: filteredContent
    })
  }


  render() {
    const marqueeItemArrays = this.state.marqueeItemArray;
    let marqueeItemArray;

    if (marqueeItemArrays) {
      let filteredmarqueeItemArrays = marqueeItemArrays.filter(
        marqueeItem => marqueeItem.fields.marqueeType === "testimonial"
      );
      marqueeItemArray = filteredmarqueeItemArrays.map(marqueeItemArray => {
        return (
          <HomeMarqueeListObject
            key={marqueeItemArray.sys.id}
            marqueeItemArray={marqueeItemArray}
            locale={this.props.locale}
          />
        );
      });
    }

    return <div>{marqueeItemArray}</div>;
  }
}
export default withRouter(HomeMarqueeList);
