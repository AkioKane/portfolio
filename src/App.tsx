import styles from './App.module.css';
import Header from './Header';

function App() {
  return (
    <>
      <div className={styles.main}>
        <Header />

        <div className={styles.content}>

        </div>

        <div className={styles.footer}></div>
      </div>
    </>
  );
}

export default App;
