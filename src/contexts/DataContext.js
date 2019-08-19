import * as contentful from "contentful";
import React, { Component, createContext } from 'react';
import { withRouter } from "react-router-dom";
import PathToRegexp from "path-to-regexp";
import { contenfulConfig } from "../config/contentfulKeys"

export const DataContext = createContext();

class DataContextProvider extends Component {

  generateSpaceAndAccess = () => {
    if (document.cookie) {
      const cookieArray = document.cookie.split(" ");

      // KEEP cookieArrays for now for testing purposes
      const cookieArrayChina = [
        "ajs_user_id=null;",
        "ajs_group_id=null;",
        "ajs_anonymous_id=%22da02155a-24b5-4a2f-975b-57a2d9b11ba7%22;",
        "__distillery=37c1813_175da9d6-de81-42cc-a6bd-df41c410e0ac-7e613e6a1-52e74d9ca234-69d2;",
        "intercom-id-giyujuw5=0732defb-3725-488f-809e-2b74254a709a;",
        "country_code=CN"
      ];
      const cookieArrayIndia = [
        "ajs_user_id=null;",
        "ajs_group_id=null;",
        "ajs_anonymous_id=%22da02155a-24b5-4a2f-975b-57a2d9b11ba7%22;",
        "__distillery=37c1813_175da9d6-de81-42cc-a6bd-df41c410e0ac-7e613e6a1-52e74d9ca234-69d2;",
        "intercom-id-giyujuw5=0732defb-3725-488f-809e-2b74254a709a;",
        "country_code=IN"
      ];
      const cookieArrayUSA = [
        "ajs_user_id=null;",
        "ajs_group_id=null;",
        "ajs_anonymous_id=%22da02155a-24b5-4a2f-975b-57a2d9b11ba7%22;",
        "__distillery=37c1813_175da9d6-de81-42cc-a6bd-df41c410e0ac-7e613e6a1-52e74d9ca234-69d2;",
        "intercom-id-giyujuw5=0732defb-3725-488f-809e-2b74254a709a;",
        "country_code=US"
      ];
      const cookieArrayInternational = [
        "ajs_user_id=null;",
        "ajs_group_id=null;",
        "ajs_anonymous_id=%22da02155a-24b5-4a2f-975b-57a2d9b11ba7%22;",
        "__distillery=37c1813_175da9d6-de81-42cc-a6bd-df41c410e0ac-7e613e6a1-52e74d9ca234-69d2;",
        "intercom-id-giyujuw5=0732defb-3725-488f-809e-2b74254a709a;",
        "country_code=JP"
      ];

      const country_codeArray = cookieArray.filter(
        cookie => cookie.substring(0, 12) === "country_code"
      );

      const country_code = country_codeArray[0];

      if (country_code === "country_code=CN") {
        return contenfulConfig.chinaSpace
      } else if (country_code === "country_code=IN") {
        return contenfulConfig.indiaSpace
      } else if (country_code === "country_code=US") {
        return contenfulConfig.usaSpace
      } else {
        return contenfulConfig.internationalSpace
      }
    } else {
      return contenfulConfig.internationalSpace
    }
  }

  generateLocale = (location) => {
    if (location.pathname === "/home" || location.pathname === "/") {
      return "en-US"
    } else {
      const ROUTE = "/:space/:locale/:path*";
      const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
      if (routeComponents) {
        return routeComponents[2]
      } else return "en-US"
    }
  }

  fetchEntries = (content_type) => {
    const client = contentful.createClient({
      space: this.generateSpaceAndAccess().space,
      environment: contenfulConfig.environment,
      accessToken: this.generateSpaceAndAccess().accessToken,
    });
    return client
      .getEntries({
        content_type: content_type,
        locale: this.generateLocale(this.props.location)
      })
      .then(response => response.items)
      .catch(err => console.error(err));
  };
  // Should be refactored
  // Consider using lodash get inside of the filterContentFields[key][0]
  // https://lodash.com/docs/4.17.15#get
  setContent = (response, pageType) => {
    const content = response
    const data = {}
    let filteredContent = {}
    if (content[0].fields.pageType) {
      filteredContent = content.filter(
        content => content.fields.pageType === pageType
      )
    } else {
      filteredContent = content
    }
    let filteredContentFields = filteredContent[0].fields;
    for (let key in filteredContentFields) {
      if (typeof filteredContentFields[key] === "string") {
        data[key] = filteredContentFields[key]
      } else if (Array.isArray(filteredContentFields[key])) {
        if (typeof filteredContentFields[key][0] === "string") {
          data[key] = filteredContentFields[key]
        } else if (filteredContentFields[key][0].sys.type === "Asset") {
          data[key] = filteredContentFields[key].map(
            content => content.fields.file.url
          )
        } else if (filteredContentFields[key][0].sys.type === "Entry") {
          data[key] = filteredContentFields[key]
        }
        else {
          data[key] = filteredContentFields[key].map(
            content => content.fields.file.url
          )
        }
      } else if (typeof filteredContentFields[key] === "number") {
        data[key] = filteredContentFields[key]
      }
      else {
        data[key] = filteredContentFields[key].fields.file.url
      }
    }
    return data
  }

  // This is used to filter the data for HomeMarquee -> src/pages/home/HomeMarquee.js &
  // HomeMarqueeList -> src/pages/home/homeMarquee/HomeMarqueeList.js
  // I cant get it to work inside the primary setContent function
  // Refactor would be nice
  setMarqueeContent = (response, pageType) => {
    let data = {}
    let filteredContent = response.filter(
      content => content.sys.contentType.sys.id === pageType
    )
    data = filteredContent
    this.setState({
      marqueeCount: filteredContent.length
    })
    return data
  }

  // This is used to create the array needed for the schoolMarquee
  // Used here -> src/pages/clientStories/clientStoriesMarquee/ClientStoriesMarqueeList.js 
  // & Used here -> src/pages/clientStories/ClientStoriesHomePageCards.js
  setSchoolMarqueeContent = response => {
    const pageContent = response;
    let schoolItems = []
    for (let key in pageContent) {
      let schoolObject = {
        blurb: pageContent[key].fields.clientStoryStoryBlurb,
        logo: pageContent[key].fields.clientStoryLogo.fields.file.url,
        route: pageContent[key].fields.pageRoute,
        homePageBlurb: pageContent[key].fields.clientStoryHomePageBlurb,
        id: pageContent[key].sys.id
      };
      schoolItems.push(schoolObject)
    }
    return schoolItems
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          fetchEntries: this.fetchEntries,
          setContent: this.setContent,
          setMarqueeContent: this.setMarqueeContent,
          setSchoolMarqueeContent: this.setSchoolMarqueeContent,
          generateSpaceAndAccess: this.generateSpaceAndAccess
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default withRouter(DataContextProvider);
