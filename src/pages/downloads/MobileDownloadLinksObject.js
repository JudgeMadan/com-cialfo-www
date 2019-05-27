import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Downloads.css";

class MobileDownloadLinksObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const downloadLinks = this.props.downloadLinks;
    const downloadLinksUrls = this.props.downloadLinksUrls;
    let downloadLinksObject;

    if (downloadLinks && downloadLinksUrls) {
      downloadLinksObject = downloadLinks.map((downloadLink, index) => {
        return (
          <Col className="" key={downloadLink}>
            <a href={downloadLinksUrls[index]}>
              <img className="app-store-image" src={downloadLink} />{" "}
            </a>
          </Col>
        );
      });
    }
    return <Row className="center-in-row">{downloadLinksObject}</Row>;
  }
}

export default MobileDownloadLinksObject;
