import React from "react";
import * as contentful from "contentful";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testArticles: [],
      locale: "zh-CN"
    };
  }

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
    console.log(this.state);
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="col-sm display-4">Welcome to Cialfo</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
            sollicitudin tempor id eu. Lorem mollis aliquam ut porttitor leo.
            Quis auctor elit sed vulputate mi sit amet mauris commodo. Rhoncus
            dolor purus non enim praesent elementum facilisis leo. Senectus et
            netus et malesuada fames. Enim tortor at auctor urna nunc id cursus
            metus. Sit amet luctus venenatis lectus magna fringilla.
          </p>
          <p className="lead">
            Pellentesque massa placerat duis ultricies lacus. Sed id semper
            risus in hendrerit gravida. Eget mi proin sed libero enim sed
            faucibus turpis in. Porttitor leo a diam sollicitudin. Egestas dui
            id ornare arcu odio ut sem. Tellus cras adipiscing enim eu. Aliquam
            vestibulum morbi blandit cursus risus at ultrices mi. Semper viverra
            nam libero justo laoreet sit. Nisl rhoncus mattis rhoncus urna neque
            viverra justo nec. Fermentum leo vel orci porta non pulvinar neque.
            Aliquam purus sit amet luctus venenatis lectus magna fringilla. Sit
            amet mauris commodo quis imperdiet. Amet purus gravida quis blandit
            turpis cursus in hac habitasse. Metus vulputate eu scelerisque felis
            imperdiet proin fermentum leo vel. Massa id neque aliquam vestibulum
            morbi blandit cursus. Feugiat scelerisque varius morbi enim nunc. Id
            leo in vitae turpis massa sed elementum tempus.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
