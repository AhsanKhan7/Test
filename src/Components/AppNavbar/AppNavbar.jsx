import React from "react";
import styles from "./app_nav.module.scss";
import SideNav from "../SideNav/SideNav";

import apple from "../../Assets/SideNav/apple.svg";

const AppNavbar = () => {
  return (
    <div className={styles.nav_bar_container}>
      <div className={styles.sideNav_container}>
        <SideNav />
      </div>

      <div className={styles.topNav}>
        <section>
          <section className={styles.section1}>
            <button>
              <span>Upcoming Video Call</span>
              <i class="far fa-clock"></i>
              <span>4:35pm</span>
              <i class="fas fa-arrow-circle-right"></i>
            </button>
          </section>
        </section>
        <section className={styles.sect2}>
          <section className={styles.section2}>
            <button>Invite Contact</button>
          </section>
          <section className={styles.section3}>
            <select id="name" name="name">
              <option value="english">English</option>
              <option value="arabic">Arabic</option>
              <option value="french">French</option>
              <option value="latin">Latin</option>
            </select>
          </section>
          <section className={styles.section4}>
            <img src={apple} alt="icon" />
          </section>
          <section className={styles.section5}>
            <h5>Chris Daly</h5>
          </section>
        </section>
      </div>
    </div>
  );
};

export default AppNavbar;
