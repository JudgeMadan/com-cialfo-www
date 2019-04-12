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

  // getLocation = () => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     position => console.log(position.coords),
  //     err => console.log(err)
  //   );
  // };

  // getLocation = () => {
  //   window.navigator.geolocation.getCurrentPosition(position =>
  //     $.getJSON(
  //       "http://ws.geonames.org/countryCode",
  //       {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //         type: "JSON"
  //       },
  //       function(result) {
  //         alert(result.countryName);
  //       }
  //     )
  //   );
  // };

  updateLocale = locale => {
    this.setState({
      locale: locale
    });
  };

  // componentDidMount() {
  //   this.getLocation();
  // }

  render() {
    return (
      <div>
        <Header locale={this.state.locale} updateLocale={this.updateLocale} />
        <Router locale={this.state.locale} />
        <Footer locale={this.state.locale} />
      </div>
    );
  }
}

export default App;
