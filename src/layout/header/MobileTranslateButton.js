import React from "react";
import * as contentful from "contentful";
import NavItem from "react-bootstrap/NavItem";

class MobileTranslateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateLocale = locale => {
    this.props.updateLocale(locale);
  };

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  fetchNavBar = () =>
    this.client.getEntries({
      content_type: "navBar",
      locale: this.props.locale
    });

  setNavBar = response => {
    const navBarContent = response.items[0].fields;
    for (let key in navBarContent) {
      this.setState({
        [key]: navBarContent[key]
      });
    }
  };

  componentDidMount() {
    this.fetchNavBar().then(this.setNavBar);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchNavBar().then(this.setNavBar);
    }
  }

  render() {
    return (
      <div>
        {this.props.locale !== "zh-CN" && (
          <NavItem
            onClick={() => this.updateLocale("zh-CN")}
            className="mobile-nav-link translator"
            to="/"
          >
            中文
          </NavItem>
        )}
        {this.props.locale === "zh-CN" && (
          <NavItem
            onClick={() => this.updateLocale("en-US")}
            className="mobile-nav-link translator"
          >
            English
          </NavItem>
        )}
      </div>
    );
  }
}

export default MobileTranslateButton;
