import React from "react";
import Container from "react-bootstrap/Container";
import * as contentful from "contentful";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ClientStoriesHomePageCardItem from "./clientStoriesHomePageCards/ClientStoriesHomePageCardItem";
import "./clientStories.css";

class ClientStoriesHomePageCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { schoolInfo: [] };
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  componentDidMount() {
    this.fetchContent().then(this.setContent);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchContent().then(this.setContent);
    }
  }

  fetchContent = () =>
    this.client.getEntries({
      content_type: "clientStory",
      locale: this.props.locale
    });

  setContent = response => {
    const pageContent = response.items;
    for (let key in pageContent) {
      let schoolObject = {
        title: pageContent[key].fields.clientStoryStoryBlurb,
        logo: pageContent[key].fields.clientStoryLogo.fields.file.url,
        route: pageContent[key].fields.pageRoute,
        blurb: pageContent[key].fields.clientStoryHomePageBlurb,
        id: pageContent[key].sys.id
      };

      let schoolInfo = this.state.schoolInfo.slice();
      schoolInfo.push(schoolObject);
      this.setState({ schoolInfo: schoolInfo });
    }
  };

  render() {
    const schoolInfo = this.state.schoolInfo;
    let schoolInfoArray;
    if (schoolInfo) {
      schoolInfoArray = schoolInfo.map(schoolItem => {
        return (
          <ClientStoriesHomePageCardItem
            title={schoolItem.title}
            id={schoolItem.id}
            blurb={schoolItem.blurb}
            logo={schoolItem.logo}
            route={schoolItem.route}
            locale={this.props.locale}
          />
        );
      });
    }

    return <Row>{schoolInfoArray}</Row>;
  }
}

export default ClientStoriesHomePageCards;
