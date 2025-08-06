import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) => (isActive ? classes.active : undefined);

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" end className={navLinkClass}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
