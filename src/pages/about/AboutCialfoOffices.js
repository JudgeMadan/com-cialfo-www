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
    let officesObject;

    if (offices) {
      officesObject = offices.map(office => {
        return (
          <Col key={office.sys.id}>
            <h1 className="secondary_font_bold">{office.fields.city}</h1>
            <h2 className="secondary_font">{office.fields.address}</h2>
            <h2 className="secondary_font">{office.fields.country}</h2>
          </Col>
        );
      });
    }

    return <Row>{officesObject}</Row>;
  }
}

export default AboutCialfoOffices;
