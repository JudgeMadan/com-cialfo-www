import React from "react";

class HomeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const article = this.props.localized_2.fields;
    return (
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">{article.articleTitle}</h1>
        <h3 className="display-8">{article.articleBody}</h3>
      </div>
    );
  }
}
export default HomeItem;
