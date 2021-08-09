import React from "react";
import Project from "./Project";
import "./Projects.css";

const ProjectsPallet = () => {
  const projects = [
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
      title: "CryptoDashboard",
      description:
        " A Client Side Application which shows details of various cryptocurrencies,includes charts and much more.",
      stack: " React",
      projectlink: "https://github.com/sayeedofficial/cryptodashboard",
    },
    {
      id: "3",
      title: "CV Maker",
      description:
        "A Full stack web application prototype where user fill necessary fields and cv can be downloaded in the form of pdf",
      stack: "Bootstrap, SQLite, Django",
      projectlink: "https://github.com/sayeedofficial/cvgenerator",
    },

    {
      id: "4",
      title: "TextiMent",
      description:
        "A AI based Android/iOS Application Type a text which represent a kind of feeling and it will tell what kind of feeling the text represents.",
      stack: "Flutter, Rapid API",
      projectlink: "https://github.com/sayeedofficial/Textiment",
    },
    {
      id: "5",
      title: "Sketch2Real",
      description:
        "A AI based Android/iOS Application where user draws a object in the form a rough sketch and a real world entity representing that sketch is shown in form of picture is generated",
      stack:
        "Flask, Flutter, Deep learning and Generative adversarial networks .",
      projectlink: "https://github.com/sayeedofficial/sketchtoReal",
    },

    {
      id: "6",
      title: "LeakDetector",
      description:
        "This is Operating system based project ,A garbage collector for C programs which work on the principle of reachability of objects to detect memory leaks. .",
      stack: "C Programming Language",
      projectlink: "https://github.com/sayeedofficial/MemoryManager",
    },
    {
      id: "7",
      title: "OSPFtap",
      description:
        "It allows the discovery of all OSPF network devices in the network, without connecting to each of them or knowing all their IP addresses.",
      stack: "python programming language",
      projectlink: "https://github.com/sayeedofficial/ospfkit",
    },
    {
      id: "8",
      title: "Musicon",
      description:
        "A Machine Learning Based Project Where Face is scanned and emotions are detected which is used to find mood of the user, based on the mood song is played",
      stack: "HTML, CSS, JavaScript, Python.",
      projectlink: "https://github.com/sayeedofficial/MiniProject",
    },
  ];
  return (
    <div className="project-cards">
      {projects.map((p) => (
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
};

export default ProjectsPallet;
