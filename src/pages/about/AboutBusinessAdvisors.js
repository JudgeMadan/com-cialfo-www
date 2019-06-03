import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./About.css";
import Container from "react-bootstrap/Container";

class AboutBusinessAdvisors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const businessAdvisors = this.props.businessAdvisors;
    let businessAdvisorsObject;

    if (businessAdvisors) {
      businessAdvisorsObject = businessAdvisors.map(businessAdvisor => {
        return (
          <Col xs={12} sm={6} md={6} xl={4} key={businessAdvisor.sys.id}>
            <Container className="counselor-advisor-container white-background">
              <div className="counselor-advisor-container-inner-object">
                <Row className="counselor-advisor-blurb">
                  <p className="secondary_font">
                    {businessAdvisor.fields.aboutPageBusinessAdvisorBlurb}
                  </p>
                </Row>
                <Row
                  className="height-80 mb-2">
                  <Image
                    className="max-height-width-100"
                    roundedCircle
                    src={
                      businessAdvisor.fields.aboutPageBusinessAdvisorImage
                        .fields.file.url
                    }
                  />
                </Row>
                <Row>
                  <div>
                    <p className="secondary_font_bold mb-2">
                      {businessAdvisor.fields.aboutPageBusinessAdvisorTitle}
                    </p>
                  </div>
                </Row>
                <Row>
                  <p className="secondary_font mb-0">
                    {businessAdvisor.fields.jobTitle}
                  </p>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {businessAdvisor.fields.organization}
                  </p>
                </Row>
              </div>
            </Container>
          </Col>
        );
      });
    }
    return <Row>{businessAdvisorsObject}</Row>;
  }
}

export default AboutBusinessAdvisors;
