import React from "react";
import { Link } from "react-router-dom";
const moment = require("moment");

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
          <h1 className="display-4">{this.state.title}</h1>
          <img
            className="rounded float-left img-thumbnail"
            src={this.state.icon}
          />
          <p className="lead">{this.state.content}</p>
          <h3 className="display-5">School Successes</h3>
          {this.state.clientSchool.map((school, i) => (
            <div key={i} className="card">
              <p className="card-body">
                <span>University: {school.fields.schoolName}</span>
                <br />
                <span>
                  {moment(school.fields.admissionDate).format("MMMM D, YYYY")};
                </span>
              </p>
            </div>
          ))}
        </div>
        <Link
          to={{
            pathname: "/client"
          }}
        >
          Back to Clients
        </Link>
      </div>
    );
  }
}
export default ClientStoriesPost;
