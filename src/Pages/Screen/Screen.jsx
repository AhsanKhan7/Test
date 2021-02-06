import React from "react";
import styles from "./Screen.module.scss";
import AppNavbar from "../../Components/AppNavbar/AppNavbar";

import SmallCards from "../../Components/SmallCards/SmallCards";
import Email from "../../Components/Email/Email";

import { Card, CardBody } from "reactstrap";

import ReplayIcon from "@material-ui/icons/Replay";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";

const Screen = () => {
  return (
    <div className={styles.dashboard_container}>
      <AppNavbar />

      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <Card className={styles.card}>
            <CardBody>
              <>
                <div className={styles.cardHeader}>
                  <div className={styles.headerSection1}>
                    <section>
                      <button>+ CREATE MESSAGE</button>
                    </section>
                    <section>
                      <ReplayIcon />
                    </section>
                    <section>
                      <SearchIcon className={styles.searchIcon} />
                      <input type="text" placeholder="Search..." />
                    </section>
                    <section>
                      <select id="name" name="name">
                        <option value="Chris Daly">Chris Daly</option>
                        <option value="John Doe">John Doe</option>
                        <option value="Jane Doe">Jane Doe</option>
                        <option value="Robbin">Robbin</option>
                      </select>
                    </section>
                  </div>
                  <div className={styles.headerSection2}>
                    <section>
                      <i class="fas fa-cogs"></i>
                    </section>
                    <section>
                      <i class="fas fa-bars"></i>
                    </section>
                    <section>
                      <i class="fas fa-bars"></i>
                    </section>
                  </div>
                </div>
                <div className={styles.cardHeader2}>
                  <section>
                    <section>
                      <div>
                        <select id="category" name="category">
                          <option value="Inbox">Inbox</option>
                          <option value="Starred">Starred</option>
                          <option value="Send">Send</option>
                          <option value="Trash">Trash</option>
                        </select>
                      </div>
                      <FilterListIcon />
                      <span>Filter:</span>
                      <span>All</span>
                    </section>
                  </section>
                  <section></section>

                  <section>
                    <div>
                      <span>Folders</span>
                    </div>
                    <div>
                      <button>+ New Folder</button>
                    </div>
                  </section>
                </div>
                <div className={styles.cardItems}>
                  <section>
                    <SmallCards />
                  </section>
                  <section>
                    <Email />
                  </section>
                  <section>Folders</section>
                </div>
              </>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Screen;
