import { JSX } from "preact";
import { useState } from "preact/hooks";

import { GET, SAVE, CLEAR } from "./utils/localStorage";

import Header from "./components/Header";
import List from "./components/List";
import Card from "./components/Card";
import Footer from "./components/Footer";

import styles from "./app.module.css";

const App = (): JSX.Element => {
  const [people, setPeople] = useState<string[]>(GET());
  const [typing, setTyping] = useState<string>("");
  const [current, setCurrent] = useState<string | undefined>(undefined);

  const onSubmit = (event: Event): void => {
    event.preventDefault();
    const newPeople: string[] = typing
      .trim()
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);

    if (newPeople.length > 0) {
      const updatedPeople = [...people, ...newPeople];
      setPeople(updatedPeople);
      SAVE(updatedPeople);
    }
    setTyping("");
  };

  const onTyping = (event: JSX.TargetedEvent<HTMLInputElement, Event>): void =>
    setTyping(event.currentTarget.value);

  const next = (): void => {
    if (people.length === 0) {
      const storedPeople = GET();
      if (storedPeople.length > 0) {
        setPeople(storedPeople);
        setCurrent(undefined);
        return;
      }
      setCurrent(undefined);
      return;
    }

    const randomIndex = Math.floor(Math.random() * people.length);
    const selectedPerson = people[randomIndex];
    const remainingPeople = people.filter(
      (_person, index) => index !== randomIndex
    );

    setCurrent(selectedPerson);
    setPeople(remainingPeople);
  };

  const clear = (): void => {
    setPeople([]);
    setCurrent(undefined);
    CLEAR();
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {!people.length && !current && (
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="people-input">
                Add people to the list (<em>comma-separated list</em>):
              </label>
              <div className={styles.inputGroup}>
                <input
                  id="people-input"
                  type="text"
                  placeholder="arthur, trillie, marvin..."
                  className={styles.input}
                  value={typing}
                  onChange={onTyping}
                  autoComplete="off"
                />
                <button type="submit" className={styles.submitButton}>
                  Add People
                </button>
              </div>
            </div>
          </form>
        )}

        {current && (
          <section className={styles.currentSection}>
            <div className={styles.currentLabel}>Currently Speaking</div>
            <Card current>{current}</Card>
          </section>
        )}

        <List items={people} />
      </main>

      <Footer
        visible={people.length > 0 || current !== undefined}
        next={next}
        clear={clear}
      />
    </div>
  );
};

export default App;
