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
      <div className=" marqueeElement marqueeItem">
        <Row className="marquee-image-row">
          <Image
            className="marquee-image"
            src={
              this.props.marqueeItemArray.fields.marqueeImage.fields.file.url
            }
            roundedCircle
          />
        </Row>
        <Row className="marquee-content">
          <div>
            <h1 className="secondary_font">
              {marqueeItem.fields.marqueeContent}
            </h1>
          </div>
        </Row>
        <Row className="marquee-footer">
          <p className="secondary_font bold">
            {marqueeItem.fields.marqueeAuthor}
          </p>
        </Row>
        <Row className="marquee-footer">
          <p className="secondary_font">
            {marqueeItem.fields.marqueeAuthorSchool}
          </p>
        </Row>
      </div>
    );
  }
}
export default HomeMarqueeListObject;
