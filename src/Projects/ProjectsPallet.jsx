import React from "react";
import Project from "./Project";
import "./Projects.css";
class ProjectPallet extends React.Component {
  static defaultProps = {
    projects: [
      {
        id: "1",
        title: "Geeks Hub",
        description:
          "Its a Client side application which is used to search and fetch information of Github users and also allows browse jobs. ",
        stack: "React and Github Api",
        projectlink: " https://geekshub.netlify.app/",
      },
      {
        id: "2",
        title: "Eventigo",
        description:
          " A Full Stack Web Application which allows members to host various types of events having live chat functionality,login ,photo, upload,map location",
        stack: "Stack : React and Firebase(Back-end as a service)",
        projectlink: "React and Firebase(Back-end as a service)",
      },
      {
        id: "3",
        title: " MyContactVault",
        description:
          " It is a full stack web application where users can save contacts safely. In order to access the contacts the user needs to login.",
        stack: "MERN",
        projectlink: " https://github.com/sayeedofficial/contact-keeper",
      },
      {
        id: "4",
        title: "MemoriesApp",
        description:
          "A Full stack web application where users post interesting and unique instances that has happened in their life.",
        stack: "MERN",
        projectlink: "https://github.com/sayeedofficial/memoriesapp",
      },
      {
        id: "5",
        title: "CV Maker",
        description:
          "A Full stack web application prototype where user fill necessary fields and cv can be downloaded in the form of pdf",
        stack: "Bootstrap, SQLite,Django",
        projectlink: "https://github.com/sayeedofficial/cvgenerator",
      },
      {
        id: "6",
        title: "Placement Portal",
        description:
          "A Placement portal which shows the jobs available,having functionality of posting job to students browsing,applying jobs.",
        stack: "Bootstrap MySQL, Django",
        projectlink: "https://github.com/sayeedofficial/sitplacementportal",
      },
      {
        id: "7",
        title: "NationalParkApp",
        description:
          " A Android Application where a user can search for national parks and wildlife sanctuaries around world.The search result is shown over the mark",
        stack: "Java,Android API,Google Maps",
        projectlink: "https://github.com/sayeedofficial/nationalparksapp",
      },
      {
        id: "8",
        title: "DogCatClassifier",
        description:
          "A iOS/Android Application which can tell the whether the given image represents a cat or a dog. Image can be captured or fetched from storage",
        stack: "Flutter,Deep learning and Google's Teachable Machine Learning.",
        projectlink: "https://github.com/sayeedofficial/catvsdog",
      },
      {
        id: "9",
        title: "MyCustomCard",
        description:
          "A Android Application where you type a text and card is created having a picture as background and a text over the picture.",
        stack: "Java,Android API,Work manager API",
        projectlink: "https://github.com/sayeedofficial/CustomCardAndroid",
      },
      {
        id: "10",
        title: "TextiMent",
        description:
          "A AI based Android/iOS Application Type a text which represent a kind of feeling and it will tell what kind of feeling the text represents.",
        stack:
          "Flutter, Deep learning , Sentimental Analysis and Convulational Neural Network",
        projectlink: " ",
      },
      {
        id: "11",
        title: "Sketch2Real",
        description:
          "A AI based Android/iOS Application where user draws a object in the form a rough sketch and a real world entity representing that sketch is shown in form of picture is generated",
        stack:
          "Flask, Flutter, Deep learning and Generative adversarial networks .",
        projectlink: "https://github.com/sayeedofficial/sketchtoReal",
      },
      {
        id: "12",
        title: "DijksatraAlgoVisualizer",
        description:
          "This is a Algorithm based project which uses Graph,to solve the problem of finding shortest in a given set of cities, Dijkstra algorithm is used to find the shortest distance between two cities",
        stack: "HTML,CSS,Bootstrap,JavaScript",
        projectlink:
          "https://github.com/sayeedofficial/dijiksatratravelproblem",
      },
    ],
  };

  render() {
    return (
      <div className="project-cards">
        {this.props.projects.map((p) => (
          <Project
            id={p.id}
            title={p.title}
            description={p.description}
            stack={p.stack}
            projectlink={p.projectlink}
          />
        ))}
      </div>
    );
  }
}

export default ProjectPallet;