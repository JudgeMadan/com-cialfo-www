import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Pin from "../../img/Pin.svg";
import Calendar from "../../img/Calendar.svg";
import "./Events.css";
const moment = require("moment");

class MobileCialfoEventsObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const events = this.props.events;
    let eventsObject;

    if (events) {
      eventsObject = events.map(event => {
        const showDate = moment(event.fields.eventsDate).format("Do MMMM YYYY");
        const showTime = moment(event.fields.eventsDate).format("LT");
        const timeZone = moment(event.fields.eventsDate).format("Z");
        return (
          <Container className="my-5" key={event.sys.id}>
            <div className="event-inner-object white-background">
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
              <Row>
                <img src={Pin} />
                <p className="secondary_font event-remove-margin-bottom event-bold">
                  &nbsp; &nbsp;
                  {event.fields.eventsCity}
                </p>
              </Row>
              <Row className="pb-3">
                <img src={Calendar} />
                <p className="secondary_font event-remove-margin-bottom event-bold">
                  &nbsp;&nbsp;{showTime}&nbsp;
                  <span>UTC</span>
                  {timeZone}
                </p>
              </Row>
              <Row>
                <a className="event-link" href={event.fields.eventsRsvpLink}>
                  RSVP
                </a>
              </Row>
            </div>
          </Container>
        );
      });
    }

    return <Row>{eventsObject}</Row>;
  }
}

export default MobileCialfoEventsObject;
