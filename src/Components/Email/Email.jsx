import React from "react";
import styles from "./Email.module.scss";

import user from "../../Assets/SideNav/user.svg";
import ReplyIcon from "@material-ui/icons/Reply";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const emailDetails = {
  emailTitle: "Checking in on design progress for AmeraShare",
  name: "Christopher Daly",
  email: "Chris@amerashare.com",
  to: "Hamza javed",
  cc: "Freddy Knuth",
  time: "Tue 2/4/2021 8:43 PM",
  emailText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  regards: "Chris Daly",
};

const Email = () => {
  return (
    <div className={styles.email}>
      <h5>{emailDetails.emailTitle}</h5>

      <div className={styles.emailDetails}>
        <section>
          <img src={user} alt="profilePic" />
        </section>

        <div className={styles.emailTitles}>
          <div className={styles.emailName}>
            <h6>{emailDetails.name}</h6>
            <h5>&lt;{emailDetails.email}&gt;</h5>
          </div>

          <div className={styles.emailAddress}>
            <span>
              <strong>To:</strong>
              <p>{emailDetails.to}</p>
            </span>
            <span>
              <strong>Cc:</strong>
              <p>{emailDetails.cc}</p>
            </span>
          </div>
        </div>

        <div className={styles.timeDate}>
          <p>{emailDetails.time}</p>
        </div>

        <div className={styles.replyIcon}>
          <ReplyIcon className={styles.targetIcon} />
        </div>
        <div className={styles.forwardIcon}>
          <ArrowForwardIcon className={styles.targetIcon} />
        </div>
        <div className={styles.vertIcon}>
          <MoreVertIcon className={styles.targetIcon} />
        </div>
      </div>

      <div className={styles.emailText}>
        <p>{emailDetails.emailText}</p>
        <span>Regards</span>
        <p>{emailDetails.regards}</p>
      </div>

      <div className={styles.emailEventButtons}>
        <button>
          <ReplyIcon className={styles.emailEventIcon} />
          <span>Reply</span>
        </button>
        <button>
          <ArrowForwardIcon className={styles.emailEventIcon} />
          <span>Forward</span>
        </button>
      </div>

      <hr />
    </div>
  );
};

export default Email;
