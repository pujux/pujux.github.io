import React from 'react';
import styles from '../assets/css/AboutMe.module.css';

export default class AboutMe extends React.Component<any> {

	render() {
		return (
			<>
				<div className={styles.header}>
					Who I am
				</div>
				<div className={styles.content}>
					I'm a 20-year-old software engineer and web developer. I was born in Austria and have been living there since.
					I attended a higher technical school in Vienna (HTL Spengergasse, Wien 5) focused on IT for 5 years and graduated with superior success.
					<br /><br />
					My interest in programming first started when I was around 13 years old and I have been increasing my knowledge pretty much everday since. 
					My diploma project, Indoor Positioning System, involved Bluetooth-Low-Energy sensors to calculate the room a user is currently located in.
					<br /><br />
					I love being able to turn ideas into reality and I will keep doing so for a long time.
				</div>
			</>
		);
	}

}