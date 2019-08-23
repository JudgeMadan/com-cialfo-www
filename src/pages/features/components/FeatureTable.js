import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./FeatureTable.css";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";


class FeatureTable extends React.Component {
  constructor(props) {
    super(props);
  }

  generateRow = (startIndex, cols) => {
    let table = []
    for(var i=startIndex; i<startIndex+cols; i++){
      if(this.props.data["title" + i] != null){
        table.push(  <Col key={i} className = "feature-content-block">
            <div className="feature-content-block-container">
              <Row>
                <h4 className="secondary_title_font">
                  {this.props.data["title" + i]}
                </h4>
              </Row>
              <Row>
                <p className="secondary_font">
                  {this.props.data["text" + i]}
                </p>
              </Row>
              {(this.props.data["linkTitle" + i] != null) && (
                <Row>
                  <Link
                    className={"homeFeatureLink " + ["homePageFeaturesSendDocumentLinkText", "homePageFeaturesLeverageLinkText", "homePageFeaturesDiscoverLinkText"][i%3]}
                    to={this.props.data["link" + i] || ''}>
                    {this.props.data["linkTitle" + i]}
                  </Link>
                </Row>
              )}
            </div>
          </Col>)
        }
        else{
          table.push(<Col className = "feature-content-block"></Col>)
        }
      }
      return <Row key={startIndex} className="feature-content-row center-in-row">{table}</Row>;
  }

  generateTable = (cols, limit = 9) => {
    let table = []
    let titles = this.props.data.title1
    let texts = this.props.data
    let linkTitles = this.props.data
    let links = this.props.data

    if(this.props.data.mainTitleText){
      table.push(<div key={0} className="titleContainer row"><h1 className="primary_font">{this.props.data.mainTitleText}</h1></div>)
    }
    for(var i=1; i<=limit; i+=cols){
      if(this.props.data["title" + i]){
        table.push(this.generateRow(i, cols))
      }
    }

    return table;
  };

// <img class="marquee-oval" src="/static/media/BlueOval.68c1b398.svg">
  render() {

    // console.log(this.props.data)
    return (
      <Container className="feature-content-container">
        <MediaQuery query="(min-device-width: 1224px)">
          {this.generateTable(3)}
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1223px) and (min-device-width: 768px)">
          {this.generateTable(2)}
        </MediaQuery>
        <MediaQuery query="(max-device-width: 767px)">
          {this.generateTable(1, 1)}
        </MediaQuery>
      </Container>
    );
  }
}
export default FeatureTable;
