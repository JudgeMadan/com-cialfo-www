import React, { Component } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Router from "./layout/Router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      environment: "staging",
      locale: "en-US",
      getADemoEmail: "",
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
      spaces: {
        cn: {
          space: "1acwuo4zy8aa",
          accessToken:
            "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
        },
        intl: {
          space: "kq0n6h3xq8i9",
          accessToken: "9tSaFiRLObn_CKT5hpYU-iNrTN47rUquWSmSfV3KNLY"
        },
        india: {
          space: "6s1t375h60iy",
          accessToken: "vZ4pPEGukFHPrZCLU0ql6SlH5hvabD-aAV2wr65Pjwo"
        },
        us: {
          space: "2w8l1bcem16l",
          accessToken: "bO1jaDXJM1S5kWXDVJoZ6buysg9bGkhohqYyJr-NxIw"
        }
      }
    };
  }

  componentDidMount() {
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
        // this.setState({
        //   space: this.state.chinaSpace.space,
        //   accessToken: this.state.chinaSpace.accessToken,
        //   country_code: country_code,
        //   spaceName: this.state.chinaSpace.spaceName
        // });
        window.location.href="https://cialfo.cn"
      } else if (country_code === "country_code=IN") {
        this.setState({
          space: this.state.indiaSpace.space,
          accessToken: this.state.indiaSpace.accessToken,
          country_code: country_code,
          spaceName: this.state.indiaSpace.spaceName
        });
      } else if (country_code === "country_code=US") {
        this.setState({
          space: this.state.usaSpace.space,
          accessToken: this.state.usaSpace.accessToken,
          country_code: country_code,
          spaceName: this.state.usaSpace.spaceName
        });
      } else {
        this.setState({
          space: this.state.internationalSpace.space,
          accessToken: this.state.internationalSpace.accessToken,
          country_code: country_code,
          spaceName: this.state.internationalSpace.spaceName
        });
      }
    } else {
      this.setState({
        space: this.state.internationalSpace.space,
        accessToken: this.state.internationalSpace.accessToken,
        spaceName: this.state.internationalSpace.spaceName
      });
    }
  }

  sendEmailAddressToGetADemo = email => {
    this.setState({
      getADemoEmail: email
    });
  };

  updateLocale = locale => {
    this.setState({
      locale: locale
    });
  };

  setSpace = url => {
    if (url === "cn") {
      // return this.state.spaces.cn.space;
      window.location.href="https://cialfo.cn"
    } else if (url === "intl") {
      return this.state.spaces.intl.space;
    } else if (url === "in") {
      return this.state.spaces.india.space;
    } else if (url === "us") {
      return this.state.spaces.us.space;
    }
  };

  setAccessToken = url => {
    if (url === "cn") {
      return this.state.spaces.cn.accessToken;
    } else if (url === "intl") {
      return this.state.spaces.intl.accessToken;
    } else if (url === "in") {
      return this.state.spaces.india.accessToken;
    } else if (url === "us") {
      return this.state.spaces.us.accessToken;
    }
  };

  render() {
    const space = this.state.space;
    const accessToken = this.state.accessToken;

    if (space && accessToken) {
      return (
        <div>
          <Header
            locale={this.state.locale}
            space={this.state.space}
            accessToken={this.state.accessToken}
            updateLocale={this.updateLocale}
            country_code={this.state.country_code}
            spaceName={this.state.spaceName}
            spaces={this.state.spaces}
            setSpace={this.setSpace}
            setAccessToken={this.setAccessToken}
            environment={this.state.environment}
          />
          <Router
            spaceName={this.state.spaceName}
            getADemoEmail={this.state.getADemoEmail}
            sendEmailAddressToGetADemo={this.sendEmailAddressToGetADemo}
            spaces={this.state.spaces}
            space={this.state.space}
            setSpace={this.setSpace}
            setAccessToken={this.setAccessToken}
            environment={this.state.environment}
          />
          <Footer
            locale={this.state.locale}
            space={this.state.space}
            accessToken={this.state.accessToken}
            spaceName={this.state.spaceName}
            spaces={this.state.spaces}
            setSpace={this.setSpace}
            setAccessToken={this.setAccessToken}
            environment={this.state.environment}
          />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default App;
