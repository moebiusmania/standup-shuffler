import { JSX } from "preact";
import Card from "./Card";
import styles from "./List.module.css";

type Props = {
  items: string[];
};

const List = ({ items }: Props): JSX.Element => {
  if (items.length === 0) {
    return (
      <section className={styles.list}>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>👥</div>
          <h3 className={styles.emptyTitle}>No people in queue</h3>
          <p className={styles.emptyDescription}>
            Add people to the list above to get started with your standup
            rotation.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.list}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Remaining Queue
          <span className={styles.count}>{items.length}</span>
        </h2>
      </div>
      <div className={styles.container}>
        {items.map((item: string, index: number) => (
          <Card key={index}>{item}</Card>
        ))}
      </div>
    </section>
  );
};

export default List;
