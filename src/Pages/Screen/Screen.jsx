import React from "react";
import styles from "./Screen.module.scss";
import { Card, CardBody } from "reactstrap";

import AppNavbar from "../../Components/AppNavbar/AppNavbar";
import SmallCards from "../../Components/SmallCards/SmallCards";
import Email from "../../Components/Email/Email";
import Folders from "../../Components/Folders/Folders";

import ReplayIcon from "@material-ui/icons/Replay";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";

import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import PrintIcon from "@material-ui/icons/Print";

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
                      <ReplayIcon className={styles.reply} />
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
                  <section className={styles.middleSection}>
                    <div className={styles.middleSectionLeft}>
                      <section className={styles.Icon1}>
                        <StarIcon className={styles.IconActive} />
                      </section>

                      <section className={styles.Icon2}>
                        <DeleteIcon className={styles.Icon} />
                      </section>

                      <section className={styles.Icon3}>
                        <SaveAltIcon className={styles.Icon} />
                      </section>

                      <section className={styles.Icon4}>
                        <CameraAltIcon className={styles.Icon} />
                      </section>

                      <section className={styles.Icon5}>
                        <FolderOpenIcon className={styles.Icon} />
                      </section>
                    </div>
                    <section className={styles.Icon6}>
                      <PrintIcon className={styles.Icon} />
                    </section>
                  </section>

                  <section>
                    <div>
                      <span>Folders</span>
                    </div>
                    <div>
                      <button>
                        <p>+ New Folder</p>
                      </button>
                    </div>
                  </section>
                </div>
                <div className={styles.cardItems}>
                  <section className={styles.smallCard}>
                    <SmallCards />
                  </section>
                  <section className={styles.emailCard}>
                    <Email />
                  </section>
                  <section className={styles.folderCard}>
                    <Folders />
                  </section>
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
