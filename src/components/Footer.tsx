import { JSX } from "preact";
import styles from "./Footer.module.css";

type Props = {
  visible: boolean;
  next: () => void;
  clear: () => void;
};

const Footer = ({ visible, next, clear }: Props): JSX.Element => {
  if (!visible) return <></>;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.buttonGroup}>
          <button
            onClick={clear}
            className={`${styles.button} ${styles.clearButton}`}
            type="button"
          >
            <span className={styles.buttonIcon}>🗑️</span>
            Clear List
          </button>
          <button
            onClick={next}
            className={`${styles.button} ${styles.nextButton}`}
            type="button"
          >
            <span className={styles.buttonIcon}>🎯</span>
            Next Person
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
