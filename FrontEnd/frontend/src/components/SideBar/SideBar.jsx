import styles from "./SideBar.module.css";
import { FaHome, FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { AiFillBank } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";
import Profile from "../Profile/Profile";
import Balance from "../Balance/Balance";
import PropTypes from "prop-types"
import {useNavigate } from "react-router-dom";

const SideBar = ({className}) => {

  const navigate = useNavigate();

  const customClass= `${styles.SideBarContainer} ${className}`

  return (
    <div className={customClass}>
      <Profile name={"Edgar J"} nick={"@Katharina_Bernier"} />
      <Balance balance={"$1.681.37"}/>
      <nav className={styles.Main}>
        <li className={styles.ListItem}>
          <FaHome />
          <a> Home </a>
        </li>

        <li className={styles.ListItem}>
          <FaUser />
          <a> My Account </a>
        </li>

        <li className={styles.ListItem}>
          <AiFillBank />
          <a> Bank Accounts </a>
        </li>

        <li className={styles.ListItem}>
          <FaBell />
          <a> Notifications </a>
        </li>

        <li className={styles.ListItem} id={styles.Logout} onClick={() => navigate("/logout")}>
          <RiLogoutBoxRFill />
          <a> Logout </a>
        </li>
      </nav>
    </div>
  );
};

SideBar.propTypes={
    className: PropTypes.string
}

export default SideBar;
