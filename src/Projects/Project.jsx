import React from "react";
import "./Project.css";
function Project({ id, title, description, stack, projectlink }) {
  return (
    <div className="pcard">
      <h1>NO : {id}</h1>
      <h2>Title : {title}</h2>
      <p>Description: {description}</p>
          <strong>Stack : {stack} </strong>
          <br/>
      <a href={projectlink}>
        Link {" "}
        <i class="fas fa-link"></i>{" "}
      </a>
    </div>
  );
}

export default Project;
