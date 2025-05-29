import { JSX } from "preact";
import styles from "./Header.module.css";

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.icon}>🎲</div>
        <span>Standup Shuffler</span>
      </div>
      <nav className={styles.nav}>
        {/* Future navigation items can go here */}
      </nav>
    </div>
  </header>
);

export default Header;
