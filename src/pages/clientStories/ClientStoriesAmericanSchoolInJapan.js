import React from "react";
import * as contentful from "contentful";
import ClientStoriesItem from "./ClientStoriesItem";
import MobileClientStoriesItem from "./MobileClientStoriesItem";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";

class ClientStoriesAmericanSchoolInJapan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setSpace = () => {
    return this.props.setSpace(this.props.match.params.space);
  };

  setAccessToken = () => {
    return this.props.setAccessToken(this.props.match.params.space);
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken(),
    environment: this.props.environment
  });

  componentDidMount() {
    this.fetchContent().then(this.setContent);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.fetchContent().then(this.setContent);
    }
  }

  fetchContent = () =>
    this.client.getEntries({
      content_type: "clientStory",
      locale: this.props.match.params.locale
    });

  setContent = response => {
    const pageContent = response.items;
    let filteredpageContent = pageContent.filter(
      pageContent => pageContent.fields.pageType === "americanSchoolInJapan"
    );
    let filteredpageContentFields = filteredpageContent[0].fields;
    for (let key in filteredpageContentFields) {
      if (typeof filteredpageContentFields[key] === "string") {
        this.setState({
          [key]: filteredpageContentFields[key]
        });
      } else if (filteredpageContentFields[key].fields) {
        this.setState({
          [key]: filteredpageContentFields[key].fields.file.url
        });
      } else if (typeof filteredpageContentFields[key] === "number") {
        this.setState({
          [key]: filteredpageContentFields[key]
        });
      } else {
        this.setState({
          [key]: filteredpageContentFields[key].content
        });
      }
    }
  };

  render() {
    return (
      <div>
        {/* FULL SCREEN CLIENT STORY PAGE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <ClientStoriesItem
            schoolName={this.state.clientStorySchoolName}
            schoolBlurb={this.state.clientStoryStoryBlurb}
            schoolImage={this.state.clientStorySchoolImage}
            schoolLogo={this.state.clientStoryLogo}
            shortTestimonial={this.state.clientStoryShortTestimonial}
            seniorNumbers={this.state.clientStoryNumberOfSeniors}
            counselorNumbers={this.state.clientStoryConsultingTeam}
            curriculum={this.state.clientStoryCurriculum}
            location={this.state.clientStorySchoolLocation}
            buttonText={this.state.clientStoryContactSalesText}
            testimonialBlurb_1={this.state.clientStoryTestimonialBlurb1}
            testimonialBlurb_2={this.state.clientStoryTestimonialBlurb2}
            testimonialBlurb_3={this.state.clientStoryTestimonialBlurb3}
            testimonialBlurb_4={this.state.clientStoryTestimonialBlurb4}
            testimonialBlurb_5={this.state.clientStoryTestimonialBlurb5}
            testimonialPullQuote_1={this.state.clientStoryTestimonialPullQuote1}
            testimonialPullQuote_2={this.state.clientStoryTestimonialPullQuote2}
            testimonialVideo={this.state.clientStoryTestimonialVideoEmbedLink}
            testimonialType={this.state.testimonialType}
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
            spaces={this.props.spaces}
            setSpace={this.props.setSpace}
            setAccessToken={this.props.setAccessToken}
            environment={this.props.environment}
          />
        </MediaQuery>
        {/* MOBILE CLIENT STORY PAGE */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileClientStoriesItem
            schoolName={this.state.clientStorySchoolName}
            schoolBlurb={this.state.clientStoryStoryBlurb}
            schoolImage={this.state.clientStorySchoolImage}
            schoolLogo={this.state.clientStoryLogo}
            shortTestimonial={this.state.clientStoryShortTestimonial}
            seniorNumbers={this.state.clientStoryNumberOfSeniors}
            counselorNumbers={this.state.clientStoryConsultingTeam}
            curriculum={this.state.clientStoryCurriculum}
            location={this.state.clientStorySchoolLocation}
            buttonText={this.state.clientStoryContactSalesText}
            testimonialBlurb_1={this.state.clientStoryTestimonialBlurb1}
            testimonialBlurb_2={this.state.clientStoryTestimonialBlurb2}
            testimonialBlurb_3={this.state.clientStoryTestimonialBlurb3}
            testimonialBlurb_4={this.state.clientStoryTestimonialBlurb4}
            testimonialBlurb_5={this.state.clientStoryTestimonialBlurb5}
            testimonialPullQuote_1={this.state.clientStoryTestimonialPullQuote1}
            testimonialPullQuote_2={this.state.clientStoryTestimonialPullQuote2}
            testimonialVideo={this.state.clientStoryTestimonialVideoEmbedLink}
            testimonialType={this.state.testimonialType}
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
            spaces={this.props.spaces}
            setSpace={this.props.setSpace}
            setAccessToken={this.props.setAccessToken}
            environment={this.props.environment}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default withRouter(ClientStoriesAmericanSchoolInJapan);
