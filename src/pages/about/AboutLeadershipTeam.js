import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
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
            <div className="leadership-team-container">
              <Row className="leadershipObjectContent mx-3">
                <Image
                  className="leaderImage"
                  src="https://picsum.photos/174/247"
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
            </div>
          </Col>
        );
      });
    }

    return (
      <Row className="about-leadership-team-row">{leadershipTeamObject}</Row>
    );
  }
}

export default AboutLeadershipTeam;
