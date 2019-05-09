import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const moment = require("moment");

class CialfoEventsObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const events = this.props.events;
    let eventsObject;

    if (events) {
      eventsObject = events.map(event => {
        const showDate = moment(event.fields.eventsDate).format("Do MMMM YYYY");
        return (
          <Col xs={4} key={event.sys.id}>
            <Container className="light-blue-background">
              <div className="innerObject ">
                <Row>
                  <div>
                    <h1>{event.fields.aboutPageBusinessAdvisorTitle}</h1>
                  </div>
                </Row>
                <Row>
                  <div>
                    <p>{event.fields.aboutPageBusinessAdvisorBlurb}</p>
                  </div>
                </Row>
                <Row>
                  <p>{event.fields.eventsCity}</p>
                </Row>
                <Row>
                  <p>{showDate}</p>
                </Row>
                <Row>
                  <a href={event.fields.eventsRsvpLink}>RSVP</a>
                </Row>
              </div>
            </Container>
          </Col>
        );
      });
    }

    return <Row>{eventsObject}</Row>;
  }
}

export default CialfoEventsObject;
