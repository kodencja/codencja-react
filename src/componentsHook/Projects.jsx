import React, { useMemo, useRef, useCallback, useEffect } from "react";
import clockWall from "../img/projects/clock.jpg";
import contact from "../img/projects/contact.jpg";
import counterApp from "../img/projects/counter-app.jpg";
import cssVariables from "../img/projects/css-var.jpg";
import exchange from "../img/projects/exchange.jpg";
import todoList from "../img/projects/todoList.jpg";

// const projectsName = [
//   "Online shop - front-end side",
//   "Change css variables with inputs",
//   "Wall-clock animation",
//   "Todo-list with axios",
//   "Exchange currency",
//   "Contact Form Page",
// ];

const projectsPhotos = [
  [todoList, "Todo-list with axios", "https://kodencja.github.io/react-todo/"],
  [
    cssVariables,
    "Change css variables with inputs",
    "https://kodencja.github.io/css-variables/",
  ],
  [clockWall, "Wall-clock animation", "https://kodencja.github.io/wall-clock/"],
  [
    counterApp,
    "Let's buy some products - frontend side",
    "https://kodencja.github.io/counter-app/",
  ],
  [
    exchange,
    "Currency exchange rate with validation - plus backend",
    "https://exchange-codenc.herokuapp.com/",
  ],
  [
    contact,
    "Contact Form Page with validation - plus backend",
    "https://contactcodenc.herokuapp.com/",
  ],
];

const Projects = React.forwardRef((props, ref) => {
  const projectsRef = useRef([]);

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

  const addToProjectRef = useCallback(
    (el) => {
      if (el && !projectsRef.current.includes(el)) {
        console.log("addToProjectRef Fn");
        projectsRef.current.push(el);
      }
    },
    [projectsRef]
  );

  //   const animateProjects = () => {
  //     projectsRef.current.forEach((project) => {
  //       const deg = 30;
  //       const stepX = deg / project.clientWidth;
  //       const stepY = deg / project.clientHeight;
  //       project.addEventListener("mousemove", (e) => {
  //         let rotateX = 0.5 * deg - e.layerY * stepY;
  //         let rotateY = -0.5 * deg + e.layerX * stepX;
  //         project.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  //       });
  //       project.addEventListener("mouseleave", () => {
  //         project.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
  //       });
  //     });
  //   };

  const projects = useMemo(() => {
    return projectsPhotos.map((project, ind) => {
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
  }, []);

  return (
    <section className="projects section text-center" ref={ref}>
      <header className="title sec-title">MY PROJECTS</header>
      <div className="container py-4">
        <div className="row mx-auto projects-row px-3">{projects}</div>
      </div>
    </section>
  );
});

export default Projects;
