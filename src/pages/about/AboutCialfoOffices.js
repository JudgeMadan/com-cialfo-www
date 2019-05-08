import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
class AboutCialfoOffices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const offices = this.props.cialfoOffices;
    console.log(offices);
    let officesObject;
    if (offices) {
      officesObject = offices.map(office => {
        return (
          <Col className="officesContainer" key={office.sys.id}>
            <div className="officeImgContainer">
              <img
                className="office-image"
                src={office.fields.icon.fields.file.url}
              />
            </div>
            <div className="office-text-container">
              <h1 className="secondary_font_bold centeredText white-text">
                {office.fields.city}
              </h1>
              <h2 className="secondary_font centeredText white-text">
                {office.fields.address}
              </h2>
              <h2 className="secondary_font centeredText white-text">
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
