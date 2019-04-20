import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

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
            <Container className="counselorObject ">
              <div className="innerObject ">
                <Row>
                  <div>
                    <p>{counselor.fields.aboutPageCounselorBlurb}</p>
                  </div>
                </Row>
                <Row>
                  <Col>
                    <Image
                      roundedCircle
                      src={
                        counselor.fields.aboutPageCounselorImage.fields.file.url
                      }
                    />
                  </Col>
                  <Col className="aboutPageCounselorTitle">
                    <div>
                      <p className="secondary_font_bold text-center">
                        {counselor.fields.aboutPageCounselorTitle}
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

    return <Row>{counselorsObject}</Row>;
  }
}

export default AboutCounselors;
