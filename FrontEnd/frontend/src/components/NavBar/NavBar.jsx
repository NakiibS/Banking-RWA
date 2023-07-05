import styles from "./NavBar.module.css"
import Logo from './../../assets/Logo.png'
import {AiOutlineUnorderedList, AiFillBell} from 'react-icons/ai'
import PropTypes from "prop-types";

const NavBar = ({onSideBarClick}) => {

  return (

    <div className={styles.Main}>

        <AiOutlineUnorderedList onClick={onSideBarClick} id={styles.Icon}/>
        <img className={styles.Logo} src={Logo} alt="Logo de la empresa"/>
        <AiFillBell/>

    </div>

  )
}

NavBar.propTypes={
  onSideBarClick: PropTypes.func.isRequired
}

export default NavBar