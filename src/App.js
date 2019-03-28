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
    console.log("App: " + this.state.locale);
    return (
      <div>
        <Header
          updateLocale={this.updateLocale}
          className="navbar-fixed-top stick"
        />
        <div className="container">
          <Router locale={this.state.locale} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
