import React, { Fragment } from "react";
import styles from "../styles/Projects.module.css";
import ProjectItem from "./ProjectItem";
import projects from "../utils/projectData";

export default class Projects extends React.Component {
  render() {
    return (
      <>
        <div className={styles.header}>My Work</div>
        {projects.map((project) => (
          <ProjectItem {...project}></ProjectItem>
        ))}
        <div className={styles.content}>
          More can be found on my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/puf17640"
            className="url"
          >
            GitHub
          </a>
          .
        </div>
      </>
    );
  }
}
