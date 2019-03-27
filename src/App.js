import React, { Component } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Router from "./layout/Router";

class App extends Component {
  render() {
    return (
      <div>
        <Header className="navbar-fixed-top stick" />
        <div className="container">
          <Router />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
