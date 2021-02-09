import React from "react";
import styles from "./SmallCards.module.scss";
import { Card, CardBody } from "reactstrap";

import user from "../../Assets/SideNav/user.svg";

const details = [
  {
    id: "1",
    name: "christopher",
    title: "checking in on design progress",
    time: "MON 3:00 PM",
    text:
      "Hey hamza, just checking in on how the design  for the email page is coming",
  },
  {
    id: "1",
    name: "Freddy",
    title: "looking for some react help",
    time: "MON 3:00 PM",
    text:
      "Hey can you take a look at the web-api react.js stuff we were talking about yesterdey",
  },
  {
    id: "1",
    name: "christopher",
    title: "checking in on design progress",
    time: "MON 3:00 PM",
    text:
      "Hey hamza, just checking in on how the design  for the email page is coming",
  },
];

const SmallCards = () => {
  return (
    <>
      {details.map((detail) => (
        <Card className={styles.card}>
          <CardBody id={detail.id}>
            <div className={styles.cardItem}>
              <section className={styles.cardImage}>
                <img src={user} alt="profilePic" />
              </section>
              <section className={styles.cardDetail}>
                <h5>{detail.name}</h5>
                <p>{detail.title}</p>
              </section>
              <section>
                <span>{detail.time}</span>
              </section>
            </div>
            <div className={styles.cardText}>
              <p>{detail.text}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default SmallCards;
