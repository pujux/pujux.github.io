import Head from "next/head";
import styles from "../styles/Home.module.css";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="I've been working with different startups and companies, developed one of the most used COVID APIs with a remote team, built a few personal projects and looked into many other things."
        />
        <meta
          name="keywords"
          content="julian pufler, pufler, julian, pufler.dev, web developer, designer, entrepreneur, front end, back end, full stack, developer, linkedin, instagram, facebook, twitter, github"
        />
        <meta
          itemprop="description"
          content="I've been working with different startups and companies, developed one of the most used COVID APIs with a remote team, built a few personal projects and looked into many other things."
        />
        <meta itemprop="name" content="Julian Pufler" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Julian Pufler" />
        <meta property="og:title" content="Julian Pufler" />
        <meta
          itemprop="og:description"
          content="I've been working with different startups and companies, developed one of the most used COVID APIs with a remote team, built a few personal projects and looked into many other things."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Julian Pufler" />
        <meta
          name="twitter:description"
          content="I've been working with different startups and companies, developed one of the most used COVID APIs with a remote team, built a few personal projects and looked into many other things."
        />
        <meta name="twitter:domain" content="pufler.dev" />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/17516174?s=32"
        />
        <title>Julian Pufler</title>
      </Head>
      <div className={styles.itemWithBorder}>
        <Introduction></Introduction>
      </div>
      <div className={styles.item}>
        <AboutMe></AboutMe>
      </div>
      <div className={styles.item}>
        <ContactMe></ContactMe>
      </div>
      <div className={styles.item}>
        <Projects></Projects>
      </div>
      <div className={styles.item}>
        <Footer></Footer>
      </div>
    </div>
  );
}
