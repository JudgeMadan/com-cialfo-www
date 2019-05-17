import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Calendar from "../../img/Calendar.svg";
import "./Events.css";
const moment = require("moment");

class MobileCialfoSessionsObject extends React.Component {
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
          <Col className="py-5" key={event.sys.id}>
            <Container className="light-blue-background">
              <div className="event-inner-object">
                <Row>
                  <div>
                    <h1 className="primary_font">
                      {event.fields.aboutPageBusinessAdvisorTitle}
                    </h1>
                  </div>
                </Row>
                <Row className="events-blurb">
                  <div>
                    <p className="secondary_font">
                      {event.fields.aboutPageBusinessAdvisorBlurb}
                    </p>
                  </div>
                </Row>
                <Row className="pb-3">
                  <img src={Calendar} />
                  <p className="secondary_font event-remove-margin-bottom event-bold">
                    &nbsp; &nbsp;
                    {showDate}
                  </p>
                </Row>
                <Row>
                  <a className="event-link" href={event.fields.eventsRsvpLink}>
                    RSVP
                  </a>
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

export default MobileCialfoSessionsObject;
