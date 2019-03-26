import React from "react";

class ClientStoriesPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.location.state.props;
  }
  render() {
    console.log(this.state);
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>HELLO</h1>
          <h1 className="display-4">{this.state.title}</h1>
          <img
            className="rounded float-left img-thumbnail"
            src={this.state.icon}
          />
          <p className="lead">{this.state.content}</p>
          {this.state.clientSchool.map((school, i) => (
            <p>{school.fields.schoolName}</p>
          ))}
          {/* <p>{this.state.clientSchool[0].fields.schoolName}</p> */}
        </div>
      </div>
    );
  }
}
export default ClientStoriesPost;
