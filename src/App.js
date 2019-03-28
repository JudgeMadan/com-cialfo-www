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

  // locale: "en-US"
  // locale: "zh-CN"

  updateLocale = locale => {
    this.setState({
      locale: locale
    });
  };

  render() {
    return (
      <div>
        <Header className="navbar-fixed-top stick" />
        <div className="container">
          <Router locale={this.state.locale} updateLocale={this.updateLocale} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
