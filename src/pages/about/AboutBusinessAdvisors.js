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
          <Col xs={4} key={businessAdvisor.sys.id}>
            <Container className="advisorObject">
              <div className="innerObject">
                <Row>
                  <p className="secondary_font">
                    {businessAdvisor.fields.aboutPageBusinessAdvisorBlurb}
                  </p>
                </Row>
                <Row>
                  <Col>
                    <Image
                      roundedCircle
                      src={
                        businessAdvisor.fields.aboutPageBusinessAdvisorImage
                          .fields.file.url
                      }
                    />
                  </Col>
                  <Col>
                    <div>
                      <p className="secondary_font_bold">
                        {businessAdvisor.fields.aboutPageBusinessAdvisorTitle}
                      </p>
                    </div>
                  </Col>
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