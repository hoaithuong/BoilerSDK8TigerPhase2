import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
            <NavLink to={"/sorting"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Sorting
            </NavLink>
            <NavLink to={"/timeover"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Time Over
            </NavLink>
            <NavLink
                to={"/advanced/dynamic"}
                className={styles.Link}
                activeClassName={styles.LinkActive}
                exact
            >
                Advanced
            </NavLink>
        </>
    );
};

export default Links;
