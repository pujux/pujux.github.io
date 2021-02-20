import React from 'react';
import styles from '../assets/css/Footer.module.css';

export default class Footer extends React.Component<any> {

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<div className={styles.header}>
					Impressum
				</div>
				<div className={styles.content}>
					Julian Pufler<br />
					3012 Wolfsgraben, AT<br />
					julian@pufler.dev
				</div>
			</div>
		);
	}

}