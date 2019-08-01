import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import LinkedInBug from "../../img/LinkedInBug.png"
import "./About.css";

class AboutLeadershipTeam extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.leadershipTeam)
    const leadershipTeam = this.props.leadershipTeam;
    let leadershipTeamObject;
    if (leadershipTeam) {
      leadershipTeamObject = leadershipTeam.map((leader, index) => {
        const number = index + 1;
        return (
          <Col key={leader.sys.id} xl={3} md={6}>
            <div className="leadership-team-container">
              <Row className="leadershipObjectContent mx-3">
                {number % 2 !== 0 && (
                  <div>
                    <Image
                      className="leaderImage oddNumberLeaderImage"
                      src={
                        leader.fields.aboutPageLeadersObjectLeaderImage.fields
                          .file.url
                      }
                    />
                  </div>
                )}
                {number % 2 === 0 && (
                  <div>
                    <Image
                      className="leaderImage evenNumberLeaderImage"
                      src={
                        leader.fields.aboutPageLeadersObjectLeaderImage.fields
                          .file.url
                      }
                    />
                  </div>
                )}
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
              <Row className="linked-in-container">
                <div className="linked-in-icon">
                  <a href={leader.fields.aboutPageLeadersObjectLinkedIn}>
                    <img className="linked-in-icon" src={LinkedInBug} />
                  </a>
                </div>
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
