import styles from './Button.module.css'
import PropTypes from 'prop-types';

const Button = ({children, className, onClick}) => {

  const buttonClassName= `${styles.Button}}`
  
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
}

export default Button
