import { Button } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";

import "./Project.css";
function Project({ id, title, description, stack, projectlink }) {
  return (
    <div className="pcard">
      <h1>NO : {id}</h1>
      <br />
      <h2>Title : {title}</h2>
      <br />
      <p>Description: {description}</p>
      <br />
      <strong>Stack : {stack} </strong>
      <br /> <br />
      <Button variant="contained" color="primary" startIcon={<LinkIcon />}>
        <a href={projectlink} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </Button>
    </div>
  );
}

export default Project;
