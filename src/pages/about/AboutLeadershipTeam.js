import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./About.css";

class AboutLeadershipTeam extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const leadershipTeam = this.props.leadershipTeam;
    let leadershipTeamObject;

    if (leadershipTeam) {
      leadershipTeamObject = leadershipTeam.map(leader => {
        return (
          <Col key={leader.sys.id}>
            <Container className="leadershipObjectContainer">
              <Row className="leadershipObjectContent leaderImage">
                <img
                  src={
                    leader.fields.aboutPageLeadersObjectLeaderImage.fields.file
                      .url
                  }
                />
              </Row>
              <Row className="leadershipObjectContent">
                <h1 className="secondary_font_bold">
                  {leader.fields.aboutPageLeadersObjectTitle}
                </h1>
              </Row>
              <Row className="leadershipObjectContent">
                <h2 className="secondary_font">
                  {leader.fields.aboutPageLeadersObjectSubtitle}
                </h2>
              </Row>
            </Container>
          </Col>
        );
      });
    }

    return <Row>{leadershipTeamObject}</Row>;
  }
}

export default AboutLeadershipTeam;
