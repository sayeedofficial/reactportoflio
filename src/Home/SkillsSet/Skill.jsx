import React from "react";
import { Badge } from "react-bootstrap"
const Skill = () => {
  return (
    <div className="card">
      <h1>
        <i className="fas fa-lightbulb"></i> Skills
      </h1>
      <Badge pill variant="success">
        Age = 21
      </Badge>
    </div>
  );
};

export default Skill;
