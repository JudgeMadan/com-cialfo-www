import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testArticles: [],
      locale: ""
    };
  }

  client = contentful.createClient({
    space: "kn93hfefankj",
    accessToken:
      "bddb1871044902e088b9aec331fca83c23351f0f2c390633d7a8e1b428317981",
    fallbackCode: null
  });

  componentDidMount() {
    this.fetchTestArticles().then(this.setTestArticles);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchTestArticles().then(this.setTestArticles);
    }
  }

  fetchTestArticles = () =>
    this.client.getEntries({
      content_type: "testArticleGlobal",
      locale: this.props.locale
    });

  setTestArticles = response => {
    this.setState({
      testArticles: response.items
    });
  };

  render() {
    const filteredResults = this.state.testArticles.filter(
      article => article.fields.localized_2
    );
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              <h1>Create, manage and track college applications</h1>
            </Row>
            <Row>
              <Form>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Control
                        type="email"
                        placeholder="Your Email Address"
                      />
                    </Col>
                    <Col>
                      <Button variant="primary" type="submit">
                        Get a Demo
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Row>
          </Col>
          <Col>
            <h1>IMG</h1>
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
      </Container>
    );
  }
}

export default Home;
