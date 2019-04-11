import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
  });

  componentDidMount() {
    this.fetchHomeContent().then(this.setHomeContent);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchHomeContent().then(this.setHomeContent);
    }
  }

  fetchHomeContent = () =>
    this.client.getEntries({
      content_type: "homePageHeaderProductImage",
      locale: this.props.locale
    });

  setHomeContent = response => {
    const homeContent = response.items[0].fields;
    console.log(response.items[0].fields);
    for (let key in homeContent) {
      this.setState({
        [key]: homeContent[key]
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              <h1>{this.state.homePageHeaderTitle}</h1>
            </Row>
            <Row>
              <Form>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Control
                        type="email"
                        placeholder={
                          this.state.homePageHeaderEmailPlaceholderText
                        }
                      />
                    </Col>
                    <Col>
                      <Button variant="primary" type="submit">
                        {this.state.homePageHeaderEmailSubmitButtonText}
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Row>
          </Col>
          <Col>
            {/* <img src={this.state.homePageHeaderProductImage.fields.file.url} /> */}
          </Col>
        </Row>
        <Row>
          <h1>The top international schools trust Cialfo</h1>
        </Row>
        <HomeMarquee />
        <Row>
          <Col>
            <h1>IMG</h1>
          </Col>
          <Col>
            <Row>
              <h1>Send documents securely</h1>
            </Row>
            <Row>
              <p>
                Use our Parchment and Common Application integrations to send
                documents and transcripts securely to colleges.
              </p>
            </Row>
            <Row>
              <p>Learn more about document sending</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <h1>Leverage a global college database</h1>
            </Row>
            <Row>
              <p>
                Cialfo's database of colleges convers countries across the
                world. Research and explore schools virtually.
              </p>
            </Row>
            <Row>
              <p>Learn more about researching colleges</p>
            </Row>
          </Col>
          <Col>
            <h1>IMG</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>IMG</h1>
          </Col>
          <Col>
            <Row>
              <h1>Discover insights about your students</h1>
            </Row>
            <Row>
              <p>
                How many students were accepted, rejected or waitlisted? What
                are your most popular schools? Cialfo puts the power of data in
                your hands.
              </p>
            </Row>
            <Row>
              <p>Learn about reporting</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <ReactPlayer url="https://cialfoplatform.wistia.com/medias/idfpk6s1q1" />
        </Row>
      </Container>
    );
  }
}

export default Home;
