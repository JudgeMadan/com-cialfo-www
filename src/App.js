import React, { Component } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Router from "./layout/Router";

class App extends Component {
  render() {
    return (
      <div>
        <Header className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
