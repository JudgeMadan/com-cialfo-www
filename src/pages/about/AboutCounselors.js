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
    const counselorsObject = this.props.counselors;
    let counselorsObjectObject;

    if (counselorsObject) {
      counselorsObjectObject = counselorsObject.map(counselorsObject => {
        return (
          <Col xs={12} sm={6} md={6} xl={4} key={counselorsObject.sys.id}>
            <Container className="counselor-advisor-container light-blue-background">
              <div className="counselor-advisor-container-inner-object">
                <Row className="counselor-advisor-blurb">
                  <p className="secondary_font">
                    {counselorsObject.fields.aboutPageBusinessAdvisorBlurb}
                  </p>
                </Row>
                <Row
                  className="height-80 mb-2">
                  <Image
                    className="max-height-width-100"
                    roundedCircle
                    src={
                      counselorsObject.fields.aboutPageBusinessAdvisorImage
                        .fields.file.url
                    }
                  />
                </Row>
                <Row>
                  <div>
                    <p className="secondary_font_bold mb-2">
                      {counselorsObject.fields.aboutPageBusinessAdvisorTitle}
                    </p>
                  </div>
                </Row>
                <Row>
                  <p className="secondary_font mb-0">
                    {counselorsObject.fields.jobTitle}
                  </p>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {counselorsObject.fields.organization}
                  </p>
                </Row>
              </div>
            </Container>
          </Col>
        );
      });
    }
    return <Row>{counselorsObjectObject}</Row>;
  }
}

export default AboutCounselors;
