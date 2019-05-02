import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class HomeMarqueeListObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const marqueeItem = this.props.marqueeItemArray;
    return (
      <Container className="orb marqueeItem">
        <Row>
          <img
            src={
              this.props.marqueeItemArray.fields.marqueeImage.fields.file.url
            }
          />
        </Row>
        <Row>
          <h1 className="primary_text">{marqueeItem.fields.marqueeContent}</h1>
        </Row>
        <Row>
          <p className="secondary_text">{marqueeItem.fields.marqueeAuthor}</p>
        </Row>
        <Row>
          <p className="secondary_text">
            {marqueeItem.fields.marqueeAuthorSchool}
          </p>
        </Row>
      </Container>
    );
  }
}
export default HomeMarqueeListObject;
