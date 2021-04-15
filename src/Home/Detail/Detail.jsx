import React from "react";
import "./Detail.css";
import { Table, Badge } from "react-bootstrap";
const Detail = () => {
  return (
    <div className="card">
      <div>
        <h1>Personal Details</h1>
        <Badge pill variant="success">
          Age : 21
        </Badge>{" "}
        <Badge pill variant="danger">
          Blood Group : B+ve
        </Badge>{" "}
        <Badge pill variant="primary">
          Profession : Student
        </Badge>{" "}
      </div>
      <br />
      <div>
        <h1>Education Details</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>School</th>
              <th>Result</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Siddaganga Institute of Technology</td>
              <td>7.8 GPA</td>
              <td>2018-2022</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sarvodaya PU College</td>
              <td>82 %</td>
              <td>2016-2018</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sri Chaitanye Techno School</td>
              <td>10 GPA</td>
              <td>2012-2016</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Detail;
