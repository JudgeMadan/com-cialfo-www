import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./About.css";

class AboutCounselors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const counselors = this.props.counselors;
    let counselorsObject;

    if (counselors) {
      counselorsObject = counselors.map(counselor => {
        return (
          <Col xs={4} key={counselor.sys.id}>
            <Container className="counselor-advisor-container light-blue-background">
              <div className="innerObject ">
                <Row>
                  <div>
                    <p>{counselor.fields.aboutPageBusinessAdvisorBlurb}</p>
                  </div>
                </Row>
                <Row>
                  <Image
                    roundedCircle
                    src={
                      counselor.fields.aboutPageBusinessAdvisorImage.fields.file
                        .url
                    }
                  />
                </Row>
                <Row>
                  <p className="secondary_font_bold">
                    {counselor.fields.aboutPageBusinessAdvisorTitle}
                  </p>
                </Row>
                <Row>
                  <p className="secondary_font reduced-margin-bottom">
                    {counselor.fields.jobTitle}
                  </p>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {counselor.fields.organization}
                  </p>
                </Row>
              </div>
            </Container>
          </Col>
        );
      });
    }

    return <Row>{counselorsObject}</Row>;
  }
}

export default AboutCounselors;
