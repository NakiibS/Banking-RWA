import styles from "./Logout.module.css";

const Logout = () => {
  return (
    <div className={styles.Main}>
      <div className={styles.Logout}>
        <h1> Sesión expirada </h1>
        <span>
          ¡Gracias por utilizar nuestros servicios bancarios! Esperamos haber
          cumplido con tus expectativas. Recuerda que estamos aquí para ayudarte
          en cualquier momento. Mantente seguro y ten un excelente día. ¡Hasta
          la próxima!
        </span>
      </div>
    </div>
  );
};

export default Logout;
