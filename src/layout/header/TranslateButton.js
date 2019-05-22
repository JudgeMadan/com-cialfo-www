import React from "react";
import * as contentful from "contentful";
import NavItem from "react-bootstrap/NavItem";
import { NavLink } from "react-router-dom";

class TranslateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedRoute: ""
    };
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
    let updatedRoute = "";
    const navBarContent = response.items[0].fields;
    const hashArray = window.location.hash.split("/");
    const filteredHashArray = hashArray.filter(
      element => element !== "#" && element !== "cn"
    );
    const localeIndex = filteredHashArray.indexOf("en-US");
    filteredHashArray[localeIndex] = "zh-CN";
    updatedRoute = filteredHashArray.join("/");
    for (let key in navBarContent) {
      this.setState({
        [key]: navBarContent[key],
        hashArray: hashArray,
        updatedRoute: updatedRoute
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
    console.log(this.state.updatedRoute);
    return (
      <div>
        {this.props.locale !== "zh-CN" && (
          // <NavItem
          //   onClick={() => this.updateLocale("zh-CN")}
          //   className="nav-link translator"
          // >
          //   <NavLink to={"/" + this.props.spaceName + "/zh-CN"}>中文</NavLink>
          // </NavItem>
          <NavLink
            className="nav-link translator"
            onClick={() => this.updateLocale("zh-CN")}
            to={this.state.updatedRoute}
          >
            中文
          </NavLink>
        )}
        {this.props.locale === "zh-CN" && (
          <NavLink
            onClick={() => this.updateLocale("en-US")}
            className="nav-link translator"
            to={"/" + this.props.spaceName + "/en-US/clients"}
          >
            English
          </NavLink>
          //   <NavItem
          //   onClick={() => this.updateLocale("en-US")}
          //   className="nav-link translator"
          // >
          //   English
          // </NavItem>
        )}
      </div>
    );
  }
}

export default TranslateButton;
