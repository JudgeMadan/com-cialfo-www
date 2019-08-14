import React, { Component } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Router from "./layout/Router";
import { DataContext } from "./contexts/DataContext"

class App extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
    }
  };

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
    const spaceName = this.context.generateSpaceAndAccess().spaceName
    if (spaceName) {
      return (
        <div>
          <Header />
          <Router
            spaceName={spaceName}
            getADemoEmail={this.state.getADemoEmail}
            sendEmailAddressToGetADemo={this.sendEmailAddressToGetADemo}
          />
          <Footer />
        </div>)
    }
    else return (<div />)
  }
}

export default App;
