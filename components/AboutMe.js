import React from "react";
import styles from "../styles/AboutMe.module.css";

export default class AboutMe extends React.Component {
  render() {
    return (
      <>
        <div className={styles.header}>Who I am</div>
        <div className={styles.content}>
          I'm a {new Date().getFullYear() - 2001}-year-old software engineer and
          web developer. I was born in Austria and have been living there since.
          <br />
          <br />
          I attended a higher technical school in Vienna (HTBLVA Spengergasse,
          Wien 5) with focus on IT for 5 years and graduated with superior
          success.
          <br />
          <br />
          I've been interested in programming since I was 13 years old and have
          been increasing my knowledge pretty much everday since. In the last
          year, smart contracts and blockchain related topics have been my
          favourites to play around with!
          <br />
          <br />
          My diploma project, 'Indoor Positioning System', involved a bunch of
          Bluetooth-Low-Energy sensors to calculate the room a user is currently
          located in using an adaptive k-nearest neighbors algorithm. This
          project
        </div>
      </>
    );
  }
}
