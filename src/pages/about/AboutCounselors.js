import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            <Row>
              <p>{counselor.fields.aboutPageCounselorBlurb}</p>
            </Row>
            <Row>
              <Col>
                <img
                  src={counselor.fields.aboutPageCounselorImage.fields.file.url}
                />
              </Col>
              <Col>
                <h2>{counselor.fields.aboutPageCounselorTitle}</h2>
              </Col>
            </Row>
          </Col>
        );
      });
    }

    return <Row>{counselorsObject}</Row>;
  }
}

export default AboutCounselors;
