import React from "react";
import ClientStoriesMarqueeListObject from "./clientStoriesMarqueeList/ClientStoriesMarqueeListObject";
import * as contentful from "contentful";
import { LinkExternal } from "@githubprimer/octicons-react";

class ClientStoriesMarqueeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolInfo: { schoolBlurbArray: [], schoolLogoArray: [] }
    };
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
      let schoolBlurbArray = this.state.schoolInfo.schoolBlurbArray.slice();
      let schoolLogoArray = this.state.schoolInfo.schoolLogoArray.slice();

      schoolBlurbArray.push(pageContent[key].fields.clientStoryStoryBlurb);
      schoolLogoArray.push(
        pageContent[key].fields.clientStoryLogo.fields.file.url
      );

      // console.log(newSchoolBlurbArray);
      let updatedSchoolInfo = { schoolBlurbArray, schoolLogoArray };
      // console.log(schoolInfo2);
      this.setState({
        schoolInfo: updatedSchoolInfo
      });
    }
  };

  render() {
    const schoolInfo = this.state.schoolInfo;
    console.log(schoolInfo);
    if (schoolInfo) {
      for (let key in schoolInfo) {
        return (
          <h1>HEY</h1>
          // <ClientStoriesMarqueeListObject
          // // key={marqueeItemArray.sys.id}
          // // marqueeItemArray={marqueeItemArray}
          // // locale={this.props.locale}
          // />
        );
      }
    }

    return <div>HEY</div>;
  }
}
export default ClientStoriesMarqueeList;
