import React, { Component } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Router from "./layout/Router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "en-US",
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

  // INTERNATIONAL BACKUP
  // componentDidMount() {
  //   this.setState({
  //     space: this.state.internationalSpace.space,
  //     accessToken: this.state.internationalSpace.accessToken
  //   });
  // }

  //  INTERNATIONAL
  componentDidMount() {
    const region = document.cookie.split(" ");
    console.log(region);
    // this.cookieParser().then(() => {
    //   this.setState({
    //     space: this.state.internationalSpace.space,
    //     accessToken: this.state.internationalSpace.accessToken
    //   });
    // });
  }

  // CHINA
  // componentDidMount() {
  //   this.setState({
  //     space: this.state.chinaSpace.space,
  //     accessToken: this.state.chinaSpace.accessToken
  //   });
  // }

  updateLocale = locale => {
    this.setState({
      locale: locale
    });
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
          />
          <Router
            locale={this.state.locale}
            space={this.state.space}
            accessToken={this.state.accessToken}
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
