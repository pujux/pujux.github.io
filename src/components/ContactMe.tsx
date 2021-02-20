import React from 'react';
import styles from '../assets/css/ContactMe.module.css';

export default class ContactMe extends React.Component<any> {

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<div className={styles.header}>
					Contact me
				</div>
				<div className={styles.content}>
					Feel free to reach out via email <a href="mailto:julian@pufler.dev" className="url">julian@pufler.dev</a>, 
					<a target="_blank" rel="noreferrer" href="https://instagram.com/pufler.dev" className="url"> Instagram</a> or 
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julianpufler" className="url"> LinkedIn</a>. 
				</div>
			</div>
		);
	}

}