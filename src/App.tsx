import styles from './assets/css/App.module.css';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.itemWithBorder}>
        <Introduction></Introduction>
      </div>
      <div className={styles.item}>
        <AboutMe></AboutMe>
      </div>
      <div className={styles.item}>
        <Projects></Projects>
      </div>
      <div className={styles.item}>
        <ContactMe></ContactMe>
      </div>
      <div className={styles.item}>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
