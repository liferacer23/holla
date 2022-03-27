import React from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        <span className={styles.logo}>
        <NavLink to="/">
        <h3>Holla!!</h3>
          </NavLink>
          
        </span>
      </div>
      <div className={styles.navbarMiddle}>
        <div className={styles.searchBar}>
          <SearchIcon className={styles.searchIcon} />
          <input placeholder="Search Friends,Posts.." type="text" />
        </div>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.navbarLinks}>
          <NavLink to="/">
            <span className={styles.navbarLink}>Home</span>
          </NavLink>
          <NavLink to="/profile/jghjfg">
            <span className={styles.navbarLink}>Profile</span>
          </NavLink>
        </div>

        <div className={styles.navbarIcons}>
          <div className={styles.navbarIconsItem}>
            <PersonIcon />
            <span className={styles.navbarIconBadge}>2</span>
          </div>
          <div className={styles.navbarIconsItem}>
            <ChatBubbleIcon />
            <span className={styles.navbarIconBadge}>2</span>
          </div>
          <div className={styles.navbarIconsItem}>
            <NotificationsActiveIcon />
            <span className={styles.navbarIconBadge}>2</span>
          </div>
          <div className={styles.navbarProfile}>
            <img className={styles.navbarImg} src="/assets/girl3.jpg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}
