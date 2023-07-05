import styles from './Button.module.css'
import PropTypes from 'prop-types';

const Button = ({children, className, enabled, onClick}) => {

  const buttonClassName= `${styles.Button} ${enabled ? styles.enabled:''}`
  
  return (
    <button className={`${buttonClassName} ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

Button.propTypes ={
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  enabled: PropTypes.bool
}

export default Button
