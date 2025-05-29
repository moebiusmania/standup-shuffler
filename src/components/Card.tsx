import { JSX } from "preact";
import styles from "./Card.module.css";

type Props = {
  children: string;
  current?: boolean;
};

const Card = ({ children, current = false }: Props): JSX.Element => {
  const cardClass = current ? `${styles.card} ${styles.current}` : styles.card;

  return (
    <div className={cardClass}>
      <div className={styles.content}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${children}`}
            alt={`Avatar for ${children}`}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{children}</p>
          {current && <div className={styles.status}>Speaking now</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
