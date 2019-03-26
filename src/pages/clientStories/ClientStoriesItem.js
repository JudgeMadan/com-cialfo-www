import React from "react";
import { Link } from "react-router-dom";

const ClientStoriesItem = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">{props.title}</h1>
      <img className="rounded float-left img-thumbnail" src={props.icon} />
      <p className="lead">{props.content}</p>
      {/* {props.map(({ fields }, i) => (
        <p>{fields}</p>
      ))} */}
    </div>
    <Link
      to={{
        pathname: `/client/${props.path}`,
        state: { props }
      }}
    >
      Read More
    </Link>
  </div>
);
export default ClientStoriesItem;
