// BOILER PLATE FOR CREATING ALL CONTEXT
import * as contentful from "contentful";
import React, { Component, createContext } from 'react';
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile } from "path-to-regexp";

export const DataContext = createContext();

class DataContextProvider extends Component {
  state = {
    data: '',
  }


  data = {
    environment: "staging",
    chinaSpace: {
      space: "1acwuo4zy8aa",
      accessToken:
        "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2",
      spaceName: "china"
    },
    indiaSpace: {
      space: "6s1t375h60iy",
      accessToken: "vZ4pPEGukFHPrZCLU0ql6SlH5hvabD-aAV2wr65Pjwo",
      spaceName: "india"
    },
    internationalSpace: {
      space: "kq0n6h3xq8i9",
      accessToken: "9tSaFiRLObn_CKT5hpYU-iNrTN47rUquWSmSfV3KNLY",
      spaceName: "intl"
    },
    usaSpace: {
      space: "2w8l1bcem16l",
      accessToken: "bO1jaDXJM1S5kWXDVJoZ6buysg9bGkhohqYyJr-NxIw",
      spaceName: "us"
    },
  }

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

      const country_codeArray = cookieArrayChina.filter(
        cookie => cookie.substring(0, 12) === "country_code"
      );

      const country_code = country_codeArray[0];

      if (country_code === "country_code=CN") {
        return this.data.chinaSpace
      } else if (country_code === "country_code=IN") {
        return this.data.indiaSpace
      } else if (country_code === "country_code=US") {
        return this.data.usaSpace
      } else {
        return this.data.internationalSpace
      }
    } else {
      return this.data.internationalSpace
    }
  }

  generateLocale = (location) => {
    const ROUTE = "/:space/:locale/:path*";
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    return routeComponents[2]
  }

  fetchEntries = () => {
    const client = contentful.createClient({
      space: this.generateSpaceAndAccess().space,
      environment: "master",
      accessToken: this.generateSpaceAndAccess().accessToken,
      locale: this.generateLocale(this.props.location)
    });
    return client
      .getEntries({
      })
      .then(response => response.items)
      .catch(err => console.error(err));
  };

  // CURRENTLY NOT USING THIS FUNCTION, BUT IF WE COULD THEN WE WOULD ONLY NEED TO LOAD DATA ONCE
  // getAllCopy = () => {
  //   this.fetchEntries().then(response => {
  //     this.setState({
  //       data: response
  //     })
  //   });
  // };



  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          fetchEntries: this.fetchEntries
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default withRouter(DataContextProvider);