import React, { Fragment } from "react";
import styles from "../styles/Projects.module.css";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "bscfee.wtf",
    description:
      "Check how much gas you have paid for transactions on the Binance Smart Chain just by connecting your wallet.",
    logo: "/img/bscfeewtf.png",
    info: (
      <Fragment>
        Built using <a href="https://metamask.io">MetaMask</a>
        <br />
        Uses the <a href="https://coingecko.com">Coingecko</a> and{" "}
        <a href="https://bscscan.com">BscScan</a> API
      </Fragment>
    ),
    url: "https://bscfee.wtf",
  },
  {
    title: "git-badges",
    description:
      "This project is serving useful badges for your GitHub Profile README.",
    logo: "/img/git-badges.svg",
    info: `Fully open source\n60k+ page views and thousands of users`,
    url: "https://badges.pufler.dev",
  },
  {
    title: "disease.sh",
    description:
      "An open API for disease-related statistics, focused on COVID-19.",
    logo: "/img/disease-sh.png",
    info: (
      <Fragment>
        Over 45 billion requests served
        <br />
        Built with remote team of 4 open-source enthusiasts
        <br />
        Featured in <a href="https://greymatter.io">greymatter.io's</a>{" "}
        CovidApiHub
      </Fragment>
    ),
    url: "https://github.com/disease-sh/API",
  },
  {
    title: "COVID Detail",
    description: "COVID19 Dashboard for both Desktop and Mobile",
    logo: "/img/covid-detail.png",
    info: (
      <Fragment>
        Built in under 5 hours
        <br />
        Thousands of page views
        <br />
        Pulls data from <a href="https://disease.sh">disease.sh</a> API
      </Fragment>
    ),
    url: "https://coviddetail.com",
  },
  {
    title: "Oreno Ramen",
    description: "Landing Page for a ramen shop in Vienna",
    logo: "/img/oreno-ramen.svg",
    url: "https://pufler.dev/oreno-ramen/v2/",
  },
  {
    title: "420 Game",
    description: "Minigame zur Promotion eines Produktes von WARDA",
    logo: "/img/420-game.png",
    url: "https://420game.at",
  },
];

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
