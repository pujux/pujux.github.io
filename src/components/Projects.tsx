import React from 'react';
import styles from '../assets/css/Projects.module.css';
import projectStyles from '../assets/css/ProjectItem.module.css';
import gitBadgesLogo from '../assets/img/git-badges.svg';
import diseaseShLogo from '../assets/img/disease-sh.png';
import covidDetailLogo from '../assets/img/covid-detail.png';
import orenoRamenLogo from '../assets/img/oreno-ramen.svg';
import game420Logo from '../assets/img/420-game.png';

const projects = [
	{ 
		title: "git-badges",
		description: "This project is serving useful badges for your GitHub Profile README.",
		logo: gitBadgesLogo,
		info: `89 Stars on Github\nBuilt with help of 8 contributors\n60k+ page views and thousands of users`,
		url: "https://badges.pufler.dev"
 	},
	{ 
		title: "disease.sh",
		description: "An open API for disease-related statistics, focused on COVID-19.",
		logo: diseaseShLogo,
		info: `Over 70 billion requests served\nRemote team of 4 open-source enthusiasts\nFeatured in greymatter.io's CovidApiHub`,
		url: "https://github.com/disease-sh/API"
 	},
	{ 
		title: "COVID Detail",
		description: "COVID19 Dashboard for both Desktop and Mobile",
		logo: covidDetailLogo,
		info: `Built in under 5 hours\nThousands of page views\nPulls data from disease.sh API`,
		url: "https://coviddetail.com"
 	},
	{ 
		title: "Oreno Ramen",
		description: "Landing Page for a ramen shop in Vienna",
		logo: orenoRamenLogo,
		url: "https://pufler.dev/oreno-ramen/v2/"
 	},
	{ 
		title: "420 Game",
		description: "Minigame zur Promotion eines Produktes von WARDA",
		logo: game420Logo,
		url: "https://420game.at"
 	},
];

class ProjectItem extends React.Component<{
	title: string,
	description: string,
	logo: string,
	info?: string,
	url: string
}> {
	render(){
		return (
			<a target="_blank" rel="noreferrer" href={this.props.url}>
				<div className={projectStyles.container}>
					<div className={projectStyles.frame}>
						<div className={projectStyles.logoContainer}>
							<div className={projectStyles.image}>
								<img alt="logo" src={this.props.logo} />
							</div>
							
						</div>
						<div className={projectStyles.titleContainer}>
							<div className={projectStyles.header}>{this.props.title}</div>
							<div className={projectStyles.content}>{this.props.description}</div>
						</div>
						{ this.props.info && 
							<div className={projectStyles.infoContainer}>
								<div className={projectStyles.header}>Info</div>
								<div className={projectStyles.content}><span>{this.props.info}</span></div>
							</div>
						}	
					</div>
				</div>
			</a>
		);
	}
}

export default class Projects extends React.Component {

	render() {
		return (
			<>
				<div className={styles.header}>
					My Work
				</div>
				{ projects.map(project => <ProjectItem {...project} ></ProjectItem>) }
				<div className={styles.content}>
					More can be found on my <a target="_blank" rel="noreferrer" href="https://github.com/puf17640" className="url">GitHub</a>.
				</div>
			</>
		);
	}

}