import { useState, useEffect } from "react";
import styles from "./Signup.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Logo from "./../../assets/Logo.png";

const Signup = () => {
  const [name, setName] = useState({
    value: "",
    validated: false,
    error: "",
  });

  const [message, setMessage] = useState({
    value: "",
    validated: false,
    error: "",
  });

  const [senderEmail, setSenderEmail] = useState({
    value: "",
    validated: false,
    error: "",
  });

  const [motivo, setMotivo] = useState({
    value: "motivo0",
    validated: false,
    error: "",
  });

  const [formSubmitted, setFormSubmitted] = useState("");
  const [buttonState, setButtonState] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleName = (event) => {
    const { value } = event.target;
    setName((prev) => ({ ...prev, value }));
    setFormSubmitted("");
  };

  const handleEmail = (event) => {
    const { value } = event.target;
    setSenderEmail((prev) => ({ ...prev, value }));
    setFormSubmitted("");
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setMessage((prev) => ({ ...prev, value }));
    setFormSubmitted("");
  };

  const handleMotivo = (event) => {
    const { value } = event.target;
    console.log(value);
    if (value === "sin_seleccion") {
      setMotivo((prev) => ({
        ...prev,
        value,
        validated: false,
        error: "* Campo requerido",
      }));
    } else {
      setMotivo((prev) => ({
        ...prev,
        value,
        validated: true,
        error: "",
      }));
    }
    setFormSubmitted("");
  };

  useEffect(() => {
    setButtonState(
      name.validated && message.validated && senderEmail.validated
    );
  }, [name.validated, message.validated, senderEmail.validated]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !(
        name.validated &&
        message.validated &&
        senderEmail.validated &&
        motivo.validated
      )
    ) {
      return;
    }

    try {
      setLoading(true);
      setButtonState(false);
      await sendContactMessage(
        name.value,
        senderEmail.value,
        motivo.value,
        message.value
      );
      setFormSubmitted("¡Gracias por tu mensaje!");
    } catch {
      setFormSubmitted("Ha ocurrido un error, por favor, inténtelo de nuevo");
    }
    setLoading(false);
    setButtonState(
      name.validated &&
        message.validated &&
        senderEmail.validated &&
        motivo.validated
    );
  };

  return (
    <div className={styles.Main}>
    <div className={styles.Form}>
      <div className={styles.Header}>
        <div className={styles.Logo}>
          <img src={Logo} alt="Logo del proyecto" />
        </div>
        <div className={styles.Title}>
          <h2> Signup </h2>
        </div>
      </div>

      <div className={styles.FormBox}>
        <form onSubmit={handleSubmit}>
          <Input
            name={"nombre"}
            placeholder={"First Name *"}
            value={name.value}
            onChange={handleName}
          />
          <Input
            name={"email"}
            placeholder={"Last Name *"}
            value={senderEmail.value}
            onChange={handleEmail}
          />

          <Input
            name={"email"}
            placeholder={"User Name *"}
            value={senderEmail.value}
            onChange={handleEmail}
          />

          <Input
            name={"email"}
            placeholder={"Password *"}
            value={senderEmail.value}
            onChange={handleEmail}
          />

          <Input
            name={"email"}
            placeholder={"Confirm Password *"}
            value={senderEmail.value}
            onChange={handleEmail}
          />

          <div>
            <Button type="submit" className={styles.Button}>
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
