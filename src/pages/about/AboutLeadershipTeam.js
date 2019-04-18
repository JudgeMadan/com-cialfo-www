import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
            <img
              src={
                leader.fields.aboutPageLeadersObjectLeaderImage.fields.file.url
              }
            />
            <h1 className="secondary_font_bold">
              {leader.fields.aboutPageLeadersObjectTitle}
            </h1>
            <h2 className="secondary_font">
              {leader.fields.aboutPageLeadersObjectSubtitle}
            </h2>
          </Col>
        );
      });
    }

    return <Row>{leadershipTeamObject}</Row>;
  }
}

export default AboutLeadershipTeam;
