import React from "react";
import ClientStoriesItem from "./ClientStoriesItem";
import MobileClientStoriesItem from "./MobileClientStoriesItem";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext"


class ClientStoriesAmericanSchoolInJapan extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.context.fetchEntries("clientStory").then((response) => {
      let data = this.context.setContent(response, "americanSchoolInJapan")
      this.setState({
        data: data
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries("clientStory").then((response) => {
        let data = this.context.setContent(response, "americanSchoolInJapan")
        this.setState({
          data: data
        })
      });
    }
  }


  render() {
    return (
      <div>
        {/* FULL SCREEN CLIENT STORY PAGE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <ClientStoriesItem
            data={this.state.data}
            schoolName={this.state.data.clientStorySchoolName}
            schoolBlurb={this.state.data.clientStoryStoryBlurb}
            schoolImage={this.state.data.clientStorySchoolImage}
            schoolLogo={this.state.data.clientStoryLogo}
            shortTestimonial={this.state.data.clientStoryShortTestimonial}
            seniorNumbers={this.state.data.clientStoryNumberOfSeniors}
            counselorNumbers={this.state.data.clientStoryConsultingTeam}
            curriculum={this.state.data.clientStoryCurriculum}
            location={this.state.data.clientStorySchoolLocation}
            buttonText={this.state.data.clientStoryContactSalesText}
            testimonialBlurb_1={this.state.data.clientStoryTestimonialBlurb1}
            testimonialBlurb_2={this.state.data.clientStoryTestimonialBlurb2}
            testimonialBlurb_3={this.state.data.clientStoryTestimonialBlurb3}
            testimonialBlurb_4={this.state.data.clientStoryTestimonialBlurb4}
            testimonialBlurb_5={this.state.data.clientStoryTestimonialBlurb5}
            testimonialPullQuote_1={this.state.data.clientStoryTestimonialPullQuote1}
            testimonialPullQuote_2={this.state.data.clientStoryTestimonialPullQuote2}
            testimonialVideo={this.state.data.clientStoryTestimonialVideoEmbedLink}
            testimonialType={this.state.data.testimonialType}
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
            schoolName={this.state.data.clientStorySchoolName}
            schoolBlurb={this.state.data.clientStoryStoryBlurb}
            schoolImage={this.state.data.clientStorySchoolImage}
            schoolLogo={this.state.data.clientStoryLogo}
            shortTestimonial={this.state.data.clientStoryShortTestimonial}
            seniorNumbers={this.state.data.clientStoryNumberOfSeniors}
            counselorNumbers={this.state.data.clientStoryConsultingTeam}
            curriculum={this.state.data.clientStoryCurriculum}
            location={this.state.data.clientStorySchoolLocation}
            buttonText={this.state.data.clientStoryContactSalesText}
            testimonialBlurb_1={this.state.data.clientStoryTestimonialBlurb1}
            testimonialBlurb_2={this.state.data.clientStoryTestimonialBlurb2}
            testimonialBlurb_3={this.state.data.clientStoryTestimonialBlurb3}
            testimonialBlurb_4={this.state.data.clientStoryTestimonialBlurb4}
            testimonialBlurb_5={this.state.data.clientStoryTestimonialBlurb5}
            testimonialPullQuote_1={this.state.data.clientStoryTestimonialPullQuote1}
            testimonialPullQuote_2={this.state.data.clientStoryTestimonialPullQuote2}
            testimonialVideo={this.state.data.clientStoryTestimonialVideoEmbedLink}
            testimonialType={this.state.data.testimonialType}
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
