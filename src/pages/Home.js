import React from "react";
import HomeItem from "./home/HomeItem";
import * as contentful from "contentful";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testArticles: [],
      locale: "zh-CN"
    };
  }

  // locale: "en-US"
  // locale: "zh-CN"

  client = contentful.createClient({
    space: "kn93hfefankj",
    accessToken:
      "bddb1871044902e088b9aec331fca83c23351f0f2c390633d7a8e1b428317981"
  });

  componentDidMount() {
    this.fetchTestArticles().then(this.setTestArticles);
  }

  fetchTestArticles = () =>
    this.client.getEntries({
      content_type: "testArticleGlobal",
      locale: this.state.locale
    });

  setTestArticles = response => {
    this.setState({
      testArticles: response.items
    });
  };

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="col-sm display-4">Welcome to Cialfo</h1>
          {this.state.testArticles.map(({ fields }, i) => (
            <HomeItem key={i} {...fields} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
