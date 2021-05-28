import React from 'react';
import styles from "../styles/ProjectItem.module.css";

export default class ProjectItem extends React.Component {
  render() {
    return (
      <a target="_blank" rel="noreferrer" href={this.props.url}>
        <div className={styles.container}>
          <div className={styles.frame}>
            <div className={styles.logoContainer}>
              <div className={styles.image}>
                <img alt="logo" src={this.props.logo} />
              </div>
            </div>
            <div className={styles.titleContainer}>
              <div className={styles.header}>{this.props.title}</div>
              <div className={styles.content}>{this.props.description}</div>
            </div>
            {this.props.info && (
              <div className={styles.infoContainer}>
                <div className={styles.header}>Info</div>
                <div className={styles.content}>
                  <span>{this.props.info}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </a>
    );
  }
}
