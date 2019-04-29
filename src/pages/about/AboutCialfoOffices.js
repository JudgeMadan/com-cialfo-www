import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import Container from "react-bootstrap/Container";

class AboutCialfoOffices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const offices = this.props.cialfoOffices;
    let officesObject;
    if (offices) {
      officesObject = offices.map(office => {
        return (
          <Col key={office.sys.id}>
            <div className="officesContainer">
              <div className="officeImgContainer">
                <img src={office.fields.icon.fields.file.url} />
              </div>
              <h1 className="secondary_font_bold centeredText">
                {office.fields.city}
              </h1>
              <h2 className="secondary_font centeredText">
                {office.fields.address}
              </h2>
              <h2 className="secondary_font centeredText">
                {office.fields.country}
              </h2>
            </div>
          </Col>
        );
      });
    }

    return (
      <Row className="offices_row near-black-background">{officesObject}</Row>
    );
  }
}

export default AboutCialfoOffices;
