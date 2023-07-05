import styles from "./App.module.css";
import MainRoutes from "./routes/MainRoutes";

function App() {


  return (
    <>
      <div className={styles.App}>
        <MainRoutes/>
      </div>
    </>
  );
}

export default App;
