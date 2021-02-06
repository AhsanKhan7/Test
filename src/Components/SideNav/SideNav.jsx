import React from "react";
import styles from "./SideNav.module.scss";

import apple from "../../Assets/SideNav/apple.svg";
import dashboard from "../../Assets/SideNav/dashboard.svg";
import user from "../../Assets/SideNav/user.svg";
import group from "../../Assets/SideNav/group.svg";
import message from "../../Assets/SideNav/message.svg";
import mail from "../../Assets/SideNav/mail.svg";
import videocam from "../../Assets/SideNav/videocam.svg";
import projects from "../../Assets/SideNav/projects.svg";
import string from "../../Assets/SideNav/string.svg";

const SideNav = () => {
  return (
    <div className={styles.sideNav_container}>
      <div className={styles.sideNavSection}>
        <section className={styles.sideNavAppLogo}>
          <img src={apple} alt="icon" />
        </section>
        <section>
          <img src={dashboard} alt="dashboardIcon" />
          <p>dashboard</p>
        </section>
        <section>
          <img src={user} alt="userIcon" />
          <p>user</p>
        </section>
        <section>
          <img src={group} alt="groupIcon" />
          <p>group</p>
        </section>
        <section>
          <img src={message} alt="messageIcon" />
          <p>message</p>
        </section>
        <section>
          <img src={mail} alt="mailIcon" />
          <p>mail</p>
        </section>
        <section>
          <img src={videocam} alt="videocamIcon" />
          <p>videocam</p>
        </section>
        <section>
          <img src={projects} alt="projectsIcon" />
          <p>projects</p>
        </section>
        <section>
          <img src={string} alt="stringIcon" />
          <p>string</p>
        </section>
      </div>
    </div>
  );
};

export default SideNav;
