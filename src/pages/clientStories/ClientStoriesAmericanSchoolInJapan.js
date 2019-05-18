import React from "react";
import * as contentful from "contentful";

import ClientStoriesItem from "./ClientStoriesItem";

class ClientStoriesAmericanSchoolInJapan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      />
    );
  }
}

export default ClientStoriesAmericanSchoolInJapan;
