import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class PrivacyAndSecurityBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const paragraphs = this.props.paragraphs;
    let paragraphsObject;

    if (paragraphs) {
      paragraphsObject = paragraphs.map(paragraph => {
        return (
          <Container key={paragraph.content[0].value} className="bullet_point">
            <h1 className="secondary_font">{paragraph.content[0].value}</h1>
          </Container>
        );
      });
    }

    return <Row>{paragraphsObject}</Row>;
  }
}
export default PrivacyAndSecurityBody;
