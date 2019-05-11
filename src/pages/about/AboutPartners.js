import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class AboutPartners extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const partners = this.props.partners;
    // console.log(partners);
    let partnersObject;

    if (partners) {
      partnersObject = partners.map(partner => {
        return (
          <Col className="home-page-partner-image" key={partner.sys.id}>
            <img className="homePartnerImages" src={partner.fields.file.url} />
          </Col>
        );
      });
    }

    return (
      <div className="home-partners-image-container">
        <Container className="home-partners-image-content">
          <Row className="imageObjectTitle">
            <h1 className="primary_font ">{this.props.title}</h1>
          </Row>
          <Row className="imageObjectRow">{partnersObject}</Row>
        </Container>
      </div>
    );
  }
}

// render() {
//   console.log(this.props);
//   const images = this.props.partnerImages;
//   let imageObject;

//   if (images) {
//     imageObject = images.map(image => {
//       return (
//         <Col className="home-page-partner-image">
//           <img className="homePartnerImages" src={image} />
//         </Col>
//       );
//     });
//   }

//   return (
//     <div className="home-partners-image-container">
//       <Container className="home-partners-image-content">
//         <Row className="imageObjectTitle">
//           <h1 className="primary_font ">{this.props.title}</h1>
//         </Row>
//         <Row className="imageObjectRow">{imageObject}</Row>
//       </Container>
//     </div>
//   );
// }

export default AboutPartners;
