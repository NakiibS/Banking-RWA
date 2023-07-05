import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.css";
import { useState } from "react";

const Layout = () => {
    const [isClosed, setIsClosed] = useState(false);

    const openClass = isClosed?styles.Closed:"";
  return (
    <div className={`${styles.Layout} ${openClass}`}>
        <div className={styles.Header}>
          <NavBar onSideBarClick={()=>setIsClosed(prev=>!prev)} />
        </div>

        <SideBar className={styles.SideBar}/>
        <div className={styles.Content}>
          <Outlet/>
        </div>
      </div>
  )
}

export default Layout