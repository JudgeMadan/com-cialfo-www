import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Downloads.css";

class DownloadLinksObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const downloadLinks = this.props.downloadLinks;
    const downloadLinksUrls = this.props.downloadLinksUrls;
    let downloadLinksObject;

    if (downloadLinks && downloadLinksUrls) {
      downloadLinksObject = downloadLinks.map((downloadLink, index) => {
        return (
          <Col className="app-store-image-col" key={downloadLink}>
            <a href={downloadLinksUrls[index]}>
              <img className="app-store-image" src={downloadLink} />{" "}
            </a>
          </Col>
        );
      });
    }
    return <Row className="app-store-rows">{downloadLinksObject}</Row>;
  }
}

export default DownloadLinksObject;
