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

      const country_codeArray = cookieArrayUSA.filter(
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
    const ROUTE = "/:space/:locale/:path*";
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    return routeComponents[2]
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

  setContent = (response, pageType) => {
    const content = response
    const data = {}
    let filteredContent = content.filter(
      content => content.fields.pageType === pageType
    )
    let filteredhomeContentFields = filteredContent[0].fields;
    for (let key in filteredhomeContentFields) {
      if (typeof filteredhomeContentFields[key] === "string") {
        data[key] = filteredhomeContentFields[key]
      } else if (Array.isArray(filteredhomeContentFields[key])) {
        if (typeof filteredhomeContentFields[key][0] === "string") {
          data[key] = filteredhomeContentFields[key]
        } else {
          data[key] = filteredhomeContentFields[key].map(
            test => test.fields.file.url
          )
        }
      } else {
        data[key] = filteredhomeContentFields[key].fields.file.url
      }
    }
    return data
  }


  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          fetchEntries: this.fetchEntries,
          setContent: this.setContent,
          stuff: this.stuff
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default withRouter(DataContextProvider);