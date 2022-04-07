import React from "react";
import { Link } from "react-router-dom";

export default function Space(props) {
  return (
    <div
      key={props.id}
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {props.showLink && (
        <Link to={`/spaces/${props.id}`}>
          <button>Visit Space</button>
        </Link>
      )}
    </div>
  );
}
