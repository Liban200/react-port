import React, { useState } from "react";
import Project from "../Project";
import EmployeeImg from "../../assets/projects/employee-time-tracking.png";
import UfoImg from "../../assets/projects/UFO-getty-Dec16-scaled-e1671232331151.webp";
import WeatherImg from "../../assets/projects/pexels-johannes-plenio-1118873.jpg";
import JateImg from "../../assets/projects/JATE.png";
import EconImg from "../../assets/projects/Types-of-eCommerce-Websites-1024x538.jpg";
import NoteImg from "../../assets/projects/notetaker.jpg";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "Employee-tracker",
      description: "MySQL/Node.js",
      link: "https://github.com",
      repo: "https://github.com/Liban200/Employee-Tracker",
      img: EmployeeImg,
    },
    {
      name: "UFO-Tracker",
      description: "MERN Stack",
      link: "https://shaun-nelson.github.io/UFO-Tracker/",
      repo: "https://github.com/Shaun-Nelson/UFO-Tracker",
      img: UfoImg,
    },
    {
      name: "Weather Dashboard",
      description: "APIs/JavaScript",
      link: "https://liban200.github.io/Weather-Dashboard/",
      repo: "https://github.com/Liban200/Weather-Dashboard",
      img: WeatherImg,
    },
    {
      name: "Just Another Text Editor",
      description: "React/JavaScript/CSS",
      link: "https://kulail-gang-200-e043f2784a3d.herokuapp.com/",
      repo: "https://github.com/Liban200/J.A.T.E-Text-Editor",
      img: JateImg,
    },
    {
      name: "Ecommerce Backend",
      description: "MySQL/Epress.js/Node.js",
      link: "https://drive.google.com/file/d/1HFqEAtWzKxll3uD-Yx2E4vj37zb2ozRW/view",
      repo: "https://github.com/Liban200/E-Commerce",
      img: EconImg,
    },
    {
      name: "Note Taker",
      description: "Express.js/Node.js",
      link: "https://murmuring-earth-79432-beefc0126dc3.herokuapp.com/",
      repo: "https://github.com/Liban200/Note-Taker",
      img: NoteImg,
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
