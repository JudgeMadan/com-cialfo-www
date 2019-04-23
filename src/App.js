import React, { Component } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Router from "./layout/Router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "en-US"
    };
  }

  componentDidMount() {
    this.setState({
      space: "qlwyndleu3of",
      accessToken:
        "2eb1abe530767fecfa2bbc4505a44fb7a4a205df1275e863807c2d9c4470e1fe"
    });
  }

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

    // console.log(document.cookie);
    // return (
    //   <div>
    //     <div>
    //       <Header
    //         locale={this.state.locale}
    //         space={this.state.space}
    //         accessToken={this.state.accessToken}
    //         updateLocale={this.updateLocale}
    //       />
    //       <Router
    //         locale={this.state.locale}
    //         space={this.state.space}
    //         accessToken={this.state.accessToken}
    //       />
    //       <Footer
    //         locale={this.state.locale}
    //         space={this.state.space}
    //         accessToken={this.state.accessToken}
    //       />
    //     </div>
    //   </div>
    // );
  }
}

export default App;
