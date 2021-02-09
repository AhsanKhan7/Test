import React from "react";
import styles from "./Folders.module.scss";
import { Card, CardBody } from "reactstrap";

const details = [
  {
    id: "1",
    name: "Design Related",
    time: "2/12/2021 3:00 PM",
  },
  {
    id: "1",
    name: "Development",
    time: "2/12/2021 3:00 PM",
  },
  {
    id: "1",
    name: "Administration",
    time: "2/12/2021 3:00 PM",
  },
];

const Folders = () => {
  return (
    <>
      <div className={styles.topGap}>
        {details.map((detail) => (
          <Card className={styles.card}>
            <CardBody id={detail.id}>
              <div className={styles.cardItem}>
                <div className={styles.cardName}>
                  <h5>{detail.name}</h5>
                </div>
                <div className={styles.cardTime}>
                  <p>{detail.time}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Folders;
