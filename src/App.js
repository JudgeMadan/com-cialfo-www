import React, { Component } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Router from "./layout/Router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "en-US",
      getADemoEmail: "",
      chinaSpace: {
        space: "1acwuo4zy8aa",
        accessToken:
          "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
      },
      internationalSpace: {
        space: "qlwyndleu3of",
        accessToken:
          "2eb1abe530767fecfa2bbc4505a44fb7a4a205df1275e863807c2d9c4470e1fe"
      }
    };
  }

  componentDidMount() {
    if (document.cookie) {
      const cookieArray = document.cookie.split(" ");
      // KEEP cookieArray2 for now for testing purposes
      const cookieArray2 = [
        "ajs_user_id=null;",
        "ajs_group_id=null;",
        "ajs_anonymous_id=%22da02155a-24b5-4a2f-975b-57a2d9b11ba7%22;",
        "__distillery=37c1813_175da9d6-de81-42cc-a6bd-df41c410e0ac-7e613e6a1-52e74d9ca234-69d2;",
        "intercom-id-giyujuw5=0732defb-3725-488f-809e-2b74254a709a;",
        "country_code=CN"
      ];

      const country_codeArray = cookieArray2.filter(
        cookie => cookie.substring(0, 12) == "country_code"
      );

      const country_code = country_codeArray[0];
      if (country_code === "country_code=CN") {
        this.setState({
          space: this.state.chinaSpace.space,
          accessToken: this.state.chinaSpace.accessToken,
          country_code: country_code
        });
      } else {
        this.setState({
          space: this.state.internationalSpace.space,
          accessToken: this.state.internationalSpace.accessToken,
          country_code: country_code
        });
      }
    } else {
      this.setState({
        space: this.state.internationalSpace.space,
        accessToken: this.state.internationalSpace.accessToken
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

  render() {
    console.log(this.state.getADemoEmail);
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
          />
          <Router
            locale={this.state.locale}
            space={this.state.space}
            accessToken={this.state.accessToken}
            getADemoEmail={this.state.getADemoEmail}
            sendEmailAddressToGetADemo={this.sendEmailAddressToGetADemo}
          />
          <Footer
            locale={this.state.locale}
            space={this.state.space}
            accessToken={this.state.accessToken}
          />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default App;
