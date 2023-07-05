import styles from "./Signup.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Logo from "./../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { mockCreateNewUser as createNewUser } from "../../services/mockcreateNewUser";

const Signup = () => {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  
  const [firstName, setFirstName] = useState({
    value: "",
    validated: false,
    error: "",
  });

  const [lastName, setLastName] = useState({
    value: "",
    validated: false,
    error: "",
  });

  const [username, setUsername] = useState({
    value: "",
    validated: false,
    error: "",
  });

  const [password, setPassword] = useState({
    value: "",
    validated: false,
    error: "",
  });

  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    validated: false,
    error: "",
  });

  const [formSubmitted, setFormSubmitted] = useState("");
  const [buttonState, setButtonState] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFirstName = (event) => {
    const { value } = event.target;
    setFirstName((prev) => ({ ...prev, value }));
    setFormSubmitted("");
  };

  const handleLastName = (event) => {
    const { value } = event.target;
    setLastName((prev) => ({ ...prev, value }));
    setFormSubmitted("");
  };

  const handleUsername = (event) => {
    const { value } = event.target;
    setUsername((prev) => ({ ...prev, value }));
    setFormSubmitted("");
  };

  const handlePassword = (event) => {
    const { value } = event.target;
    console.log(value);
    setPassword((prev) => ({ ...prev, value }))
    setFormSubmitted("");
  };

  const handleConfirmPassword = (event) => {
    const { value } = event.target;
    console.log(value);
    setConfirmPassword((prev) => ({ ...prev, value }))
    setFormSubmitted("");
  };

  useEffect(() => {
    setButtonState(
      firstName.validated &&
      lastName.validated &&
      username.validated &&
      password.validated &&
      confirmPassword.validated
    );
  }, [
    firstName.validated,
    lastName.validated,
    username.validated,
    password.validated,
    confirmPassword.validated
  ]);

  const blurFirstName = () => {
    if (!firstName.value) {
      setFirstName((prev) => ({
        ...prev,
        validated: false,
        error: "* Campo requerido",
      }));
    } else {
      setFirstName((prev) => ({
        ...prev,
        validated: true,
        error: "",
      }));
    }
  };

  const blurLastName = () => {
    if (!lastName.value) {
      setLastName((prev) => ({
        ...prev,
        validated: false,
        error: "* Campo requerido",
      }));
    } else {
      setLastName((prev) => ({
        ...prev,
        validated: true,
        error: "",
      }));
    }
  };

  const blurUsername = () => {
    if (!username.value) {
      setUsername((prev) => ({
        ...prev,
        validated: false,
        error: "* Campo requerido",
      }));
    } else {
      setUsername((prev) => ({
        ...prev,
        validated: true,
        error: "",
      }));
    }
  }

  const blurPassword = () => {

    if (!password.value) {
      setPassword((prev) => ({
        ...prev,
        validated: false,
        error: "* Campo requerido",
      }));
    }
    else {
      setPassword((prev) => ({
        ...prev,
        validated: true,
        error: "",
      }));
    }
  };

  const blurConfirmPassword = () => {

    if (!confirmPassword.value) {
      setConfirmPassword((prev) => ({
        ...prev,
        validated: false,
        error: "* Campo requerido",
      }));
    } else if (confirmPassword.value !== password.value) {
      setConfirmPassword((prev) => ({
        ...prev,
        validated: false,
        error: "* Las contraseñas deben coincidir",
      }));
    }
    else {
      setConfirmPassword((prev) => ({
        ...prev,
        validated: true,
        error: "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!(firstName.validated && lastName.validated && username.validated && password.validated && confirmPassword.validated)) {
      return;
    }

    try {
      setLoading(true);
      setButtonState(false);
      await createNewUser(firstName.value,lastName.value,username.value,password.value,confirmPassword.value);
      setFormSubmitted("¡Gracias por tu mensaje!");
    } catch {
      setFormSubmitted("Ha ocurrido un error, por favor, inténtelo de nuevo");
    }
    setLoading(false);
    setButtonState(
      firstName.validated &&
      lastName.validated &&
      username.validated &&
      password.validated &&
      confirmPassword.validated
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
            <h2> Sign Up </h2>
          </div>
        </div>

          <form onSubmit={handleSubmit}>

            <Input
              label={"First Name"}
              name={"first_name"}
              placeholder={"First Name *"}
              value={firstName.value}
              onChange={handleFirstName}
              onBlur={blurFirstName}
              error={firstName.error}
            />
            <Input
              label={"Last Name"}
              name={"last_name"}
              placeholder={"Last Name *"}
              value={lastName.value}
              onChange={handleLastName}
              onBlur={blurLastName}
              error={lastName.error}
            />

            <Input
              label={"Username"}
              name={"username"}
              placeholder={"Username *"}
              value={username.value}
              onChange={handleUsername}
              onBlur={blurUsername}
              error={username.error}
            />

            <Input
              label={"Password"}
              name={"password"}
              placeholder={"Password *"}
              value={password.value}
              onChange={handlePassword}
              onBlur={blurPassword}
              error={password.error}
            />

            <Input
              label={"Confirm Password"}
              name={"confirm_password"}
              placeholder={"Confirm Password *"}
              value={confirmPassword.value}
              onChange={handleConfirmPassword}
              onBlur={blurConfirmPassword}
              error={confirmPassword.error}
            />

            <div className={styles.Send}>
            <Button 
              type="submit" 
              className={styles.Button} 
              enabled={buttonState} 
              onClick={() => navigate('/')}
              >
                Sign Up
            </Button>

            <span className={styles.Alert}>
              {loading ? "Loading ..." : formSubmitted}
            </span>
              
            </div>
          </form>
        </div>
      </div>
  );
};

export default Signup;
