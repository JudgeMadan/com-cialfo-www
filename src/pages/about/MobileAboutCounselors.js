import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

class MobileAboutCounselors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const counselorsObject = this.props.counselors;
    let counselorsObjectObject;

    if (counselorsObject) {
      counselorsObjectObject = counselorsObject.map(counselorsObject => {
        return (
          <Container
            key={counselorsObject.sys.id}
            className="counselor-advisor-container light-blue-background mx-4"
          >
            <div className="counselor-advisor-container-inner-object">
              <Row>
                <p className="secondary_font">
                  {counselorsObject.fields.aboutPageBusinessAdvisorBlurb}
                </p>
              </Row>
              <Row>
                <Image
                  roundedCircle
                  src={
                    counselorsObject.fields.aboutPageBusinessAdvisorImage.fields
                      .file.url
                  }
                />
              </Row>
              <Row>
                <div>
                  <p className="secondary_font_bold">
                    {counselorsObject.fields.aboutPageBusinessAdvisorTitle}
                  </p>
                </div>
              </Row>
              <Row>
                <p className="secondary_font reduced-margin-bottom">
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
        );
      });
    }
    return <Row>{counselorsObjectObject}</Row>;
  }
}

export default MobileAboutCounselors;
