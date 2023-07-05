import PropTypes from 'prop-types';

import styles from "./Input.module.css";

const Input = ({ label, name, placeholder, value, onChange, onBlur, error }) => {
  return (

    <div className={styles.InputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className={styles.Error}> {error}</span>
    </div>
    
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

export default Input;