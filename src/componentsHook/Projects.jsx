import React, { useRef, useEffect } from "react";
import clockWall from "../img/projects/clock.jpg";
import contact from "../img/projects/contact.jpg";
import counterApp from "../img/projects/counter-app.jpg";
import cssVariables from "../img/projects/css-var.jpg";
import exchange from "../img/projects/exchange.jpg";
import todoList from "../img/projects/todoList.jpg";
import vpanels from "../img/projects/vpanels1.jpg";
import codencja from "../img/projects/codenc.jpg";
import memoryCards from "../img/projects/memorycards.jpg";
import calculator from "../img/projects/calcMVC.jpg";
import forms from "../img/projects/formsg1g.jpg";
import dishForm from "../img/projects/dish-form.jpg";
import dishReduxForm from "../img/projects/dishRdxForm.jpg";
import SPOJ from "../img/projects/SPOJEx.jpg";
import "../css/projects.css";

const projectsPhotos = [
  [
    codencja,
    "Portfolio Page - REACT.JS, CSS, Hooks, Bootstrap4, etc. Different start page for mobiles and moz",
    "https://github.com/kodencja/codencja-react",
  ],
  [
    memoryCards,
    "Memory Cards Game - REACT.JS, CSS-GRID, SASS",
    "https://kodencja.github.io/cards-memory/",
  ],
  [
    forms,
    "Forms Generator - TypeScript, SASS, HTML. Each input is generated through class instance",
    "https://kodencja.github.io/forms-generator/index.html",
  ],
  [
    cssVariables,
    "Change css variables by inputs - REACT.JS, CSS, Bootstrap-4",
    "https://kodencja.github.io/css-variables/",
  ],
  [
    counterApp,
    "Let's buy some products - REACT.JS, CSS, Bootstrap-4",
    "https://kodencja.github.io/counter-app/",
  ],
  [
    vpanels,
    "Fun with flex - REACT.JS, SASS",
    "https://kodencja.github.io/vpanels/",
  ],
  [
    dishForm,
    "Form to order a dish - REACT.JS, SASS, API POST",
    "https://kodencja.github.io/dish-form/",
  ],
  [
    dishReduxForm,
    "Form to order a dish - REACT-REDUX, redux-form, SASS, API POST",
    "https://kodencja.github.io/dish-redux-form/",
  ],
  [
    calculator,
    "Calculator - JS, SASS, HTML, MVC",
    "https://kodencja.github.io/calc-mvc/",
  ],

  [
    clockWall,
    "Wall-clock animation - REACT.JS, CSS",
    "https://kodencja.github.io/wall-clock/",
  ],

  [
    exchange,
    "Currency exchange rate with validation - React.js, Node.js, JS, CSS",
    "https://exchange-codenc.herokuapp.com/",
  ],
  [
    contact,
    "Contact Form Page with validation - React.js, Node.js, JS, CSS",
    "https://contactcodenc.herokuapp.com/",
  ],

  [
    todoList,
    "Todo-list with axios - REACT.JS, CSS",
    "https://kodencja.github.io/react-todo/",
  ],
  [
    SPOJ,
    "Exercises from Polish SPOJ - C++",
    "https://github.com/kodencja/SPOJ-exercises",
  ],
];

const Projects = ({ onTitleAnim }) => {
  const projectsRef = useRef([]);

  useEffect(() => {
    console.log("Projects Comp. mounted");
  }, []);

  useEffect(() => {
    const projCurrent = projectsRef.current;
    projCurrent.forEach((project) => {
      project.addEventListener("mousemove", (e) => {
        projectTransform(project, e);
      });
      project.addEventListener("mouseleave", () => {
        projectStartTransform(project);
      });
    });

    return () => {
      projCurrent.forEach((project) => {
        project.removeEventListener("mousemove", (e) => {
          projectTransform(project, e);
        });
        project.removeEventListener("mouseleave", () => {
          projectStartTransform(project);
        });
      });
    };
  }, []);

  const projectTransform = (project, e) => {
    const deg = 30;
    const stepX = deg / project.clientWidth;
    const stepY = deg / project.clientHeight;
    let rotateX = 0.5 * deg - e.layerY * stepY;
    let rotateY = -0.5 * deg + e.layerX * stepX;
    project.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const projectStartTransform = (project) => {
    project.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const addToProjectRef = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  const projects = projectsPhotos.map((project, ind) => {
    return (
      <div
        key={ind}
        className="project"
        ref={addToProjectRef}
        style={{ backgroundImage: "url(" + project[0] + ")" }}
      >
        <a
          href={project[2]}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <div className="project-description">{project[1]}</div>
        </a>
      </div>
    );
  });

  return (
    <>
      <header className="title sec-title">
        {onTitleAnim("MY\u00A0PROJECTS")}
      </header>
      <div className="container py-4">
        <div className="row mx-auto projects-row px-2">{projects}</div>
      </div>
    </>
  );
};

export default React.memo(Projects);
