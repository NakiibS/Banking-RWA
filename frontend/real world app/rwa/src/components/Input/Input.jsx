import PropTypes from 'prop-types';

import styles from "./Input.module.css";

const Input = ({name, placeholder, value, onChange}) => {
  return (

    <div className={styles.InputContainer}>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
    
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;