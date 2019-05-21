import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./About.css";
import Container from "react-bootstrap/Container";

class MobileAboutBusinessAdvisors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const businessAdvisors = this.props.businessAdvisors;
    let businessAdvisorsObject;

    if (businessAdvisors) {
      businessAdvisorsObject = businessAdvisors.map(businessAdvisor => {
        return (
          <Container
            key={businessAdvisor.sys.id}
            className="counselor-advisor-container white-background mx-4"
          >
            <div className="counselor-advisor-container-inner-object">
              <Row>
                <p className="secondary_font">
                  {businessAdvisor.fields.aboutPageBusinessAdvisorBlurb}
                </p>
              </Row>
              <Row>
                <Image
                  roundedCircle
                  src={
                    businessAdvisor.fields.aboutPageBusinessAdvisorImage.fields
                      .file.url
                  }
                />
              </Row>
              <Row>
                <div>
                  <p className="secondary_font_bold">
                    {businessAdvisor.fields.aboutPageBusinessAdvisorTitle}
                  </p>
                </div>
              </Row>
              <Row>
                <p className="secondary_font reduced-margin-bottom">
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
        );
      });
    }
    return <Row>{businessAdvisorsObject}</Row>;
  }
}

export default MobileAboutBusinessAdvisors;
