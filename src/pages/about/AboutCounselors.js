import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
          <Col key={counselor.sys.id}>
            <Container className="counselorObject ">
              <Row>
                <div className="test">
                  <p>{counselor.fields.aboutPageCounselorBlurb}</p>
                </div>
              </Row>
              <Row>
                <Col>
                  <img
                    src={
                      counselor.fields.aboutPageCounselorImage.fields.file.url
                    }
                  />
                </Col>
                <Col>
                  <h2>{counselor.fields.aboutPageCounselorTitle}</h2>
                </Col>
              </Row>
            </Container>
          </Col>
        );
      });
    }

    return <Row>{counselorsObject}</Row>;
  }
}

export default AboutCounselors;
