import React from "react";
import styles from "../styles/Introduction.module.css";

export default class Introduction extends React.Component {
  render() {
    return (
      <>
        <div className={styles.backgroundImage}>
          <img alt="background" src={"/img/background.png"} />
        </div>
        <div className={styles.profilePicture}>
          <img
            alt="Julian Pufler"
            src="https://a.storyblok.com/f/127128/x/0b8f708d05/julian.svg"
          />
        </div>
        <div className={styles.header}>Hello, I'm Julian.</div>
        <div className={styles.content}>
          In the last years I've been working with many different startups and
          companies and built one of the most used COVID APIs with a remote
          team. I've also worked on many private projects, which helped me learn
          new things and discover new topics.
          <br />
          <br />
          Currently I am working as a software developer at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://lean-coders.at"
            className="url"
          >
            Lean Coders{" "}
          </a>
          while freelancing for startups like{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://getnano.io"
            className="url"
          >
            nano
          </a>
          . I'm also one of the maintainers of{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/disease-sh/API"
            className="url"
          >
            disease.sh
          </a>
          .
          <br />
          <br />I plan on studying 'Software & Information Engineering' at TU
          Wien <strike className={styles.strike}>next semester</strike> in the
          future.
          <br />
          <br />
          Thanks for visiting my website,
          <br />
          <img
            className={styles.signature}
            alt="signature"
            src={"/img/signature.png"}
          />
        </div>
      </>
    );
  }
}
