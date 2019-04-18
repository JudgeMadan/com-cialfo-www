import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";

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
          <Col key={businessAdvisor.sys.id}>
            <Row>
              <p className="secondary_font">
                {businessAdvisor.fields.aboutPageBusinessAdvisorBlurb}
              </p>
            </Row>
            <Row>
              <Col>
                <img
                  src={
                    businessAdvisor.fields.aboutPageBusinessAdvisorImage.fields
                      .file.url
                  }
                />
              </Col>
              <Col>
                <h2 className="secondary_font">
                  {businessAdvisor.fields.aboutPageBusinessAdvisorTitle}
                </h2>
              </Col>
            </Row>
          </Col>
        );
      });
    }

    return <Row>{businessAdvisorsObject}</Row>;
  }
}

export default AboutBusinessAdvisors;
