import React from "react";
import { Badge } from "react-bootstrap";
import "./Project.css";
function Project({ id, title, description, stack, projectlink }) {
  return (
    <div className="pcard">
      <h1>NO : {id}</h1>
      <h2>Title : {title}</h2>
      <p>Description: {description}</p>
      <strong>Stack : {stack} </strong>
      <br />
      <Badge pill variant="success">
        <a href={projectlink} target="_blank" rel="noopener noreferrer">
          Link <i class="fas fa-link"></i>{" "}
        </a>
      </Badge>
    </div>
  );
}

export default Project;
