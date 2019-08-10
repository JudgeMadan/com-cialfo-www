import React from "react";
import HomeMarqueeListObject from "./homeMarqueeList/HomeMarqueeListObject";
import { withRouter } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext"

class HomeMarqueeList extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries().then((response) => {
        let data = this.context.setMarqueeContent(response, "marqueeItem")
        this.setState({
          data: data
        })
      });
    }
  }

  componentDidMount() {
    this.context.fetchEntries().then((response) => {
      let data = this.context.setMarqueeContent(response, "marqueeItem")
      this.setState({
        data: data
      })
    });
  }


  render() {
    const marqueeItemArrays = this.state.data;
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
