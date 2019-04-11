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

  updateLocale = locale => {
    this.setState({
      locale: locale
    });
  };

  render() {
    return (
      <div>
        <Header locale={this.state.locale} updateLocale={this.updateLocale} />
        <Router locale={this.state.locale} />
        <Footer />
      </div>
    );
  }
}

export default App;
