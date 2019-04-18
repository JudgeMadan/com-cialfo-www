import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            <h1>{office.fields.city}</h1>
            <h2>{office.fields.address}</h2>
            <h2>{office.fields.country}</h2>
          </Col>
        );
      });
    }

    return <Row>{officesObject}</Row>;
  }
}

export default AboutCialfoOffices;
