import React from 'react';
import background from '../assets/img/background.png'
import signature from '../assets/img/signature.png'
import styles from '../assets/css/Introduction.module.css';

export default class Introduction extends React.Component<any> {

	render() {
		return (
			<>
				<div className={styles.backgroundImage}>
					<img alt="background" src={background} />
				</div>
				<div className={styles.profilePicture}>
					<img alt="Julian Pufler" src="https://avatars.githubusercontent.com/u/17516174?s=256" />
				</div>
				<div className={styles.header}>
					Hello, I'm Julian.
				</div>
				<div className={styles.content}>
					I've been working with different startups and companies, developed one of the most used COVID APIs 
					with a remote team, built a few personal projects and looked into many other things.  
					<br /><br />
					Currently I am working as a freelance developer for startups like <a target="_blank" rel="noreferrer" href="https://getnano.io" className="url">nano </a> 
					while being a civil servant at <a target="_blank" rel="noreferrer" href="https://www.hilfswerk.at/international/" className="url">Hilfswerk International</a>.
					I'm also one of the maintainers of <a target="_blank" rel="noreferrer" href="https://github.com/disease-sh/API" className="url">disease.sh</a>.
					<br /><br />
					I plan on studying 'Software & Information Engineering' at TU Wien next semester.
					<br /><br />
					Thanks for visiting my website,
					<br />
					<img className={styles.signature} alt="signature" src={signature} />
				</div>
			</>
		);
	}

}