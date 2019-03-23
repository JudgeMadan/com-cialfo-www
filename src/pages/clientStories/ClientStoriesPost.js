import React from "react";

const ClientStoriesPost = ({
  location: {
    state: { props }
  }
}) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1>HELLO</h1>
      <h1 className="display-4">{props.title}</h1>
      <img className="rounded float-left img-thumbnail" src={props.icon} />
      <p className="lead">{props.content}</p>
    </div>
  </div>
);
export default ClientStoriesPost;
