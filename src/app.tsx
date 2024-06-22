import { JSX } from "preact";
import { useState } from "preact/hooks";

import { GET, SAVE, CLEAR } from "./utils/localStorage";

import Header from "./components/Header";
import List from "./components/List";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = (): JSX.Element => {
  const [people, setPeople] = useState<Array<string>>(GET());
  const [typing, setTyping] = useState<string>("");
  const [current, setCurrent] = useState<string | undefined>(undefined);

  const onSubmit = (event: Event): void => {
    event.preventDefault();
    const newPeople: Array<string> = typing.trim().split(",");

    setPeople(people.concat(newPeople));
    setTyping("");
    SAVE(newPeople);
  };

  const onTyping = ({
    currentTarget,
  }: JSX.TargetedEvent<HTMLInputElement, Event>): void =>
    setTyping(currentTarget.value);

  const next = (): void => {
    const n: number = Math.floor(Math.random() * people.length);
    const update: Array<string> = people.filter(
      (_e: string, i: number): boolean => i !== n
    );

    setCurrent(people[n]);
    setPeople(people.length === 0 && GET().length > 0 ? GET() : update);
  };

  const clear = (): void => {
    setPeople([]);
    setCurrent(undefined);
    CLEAR();
  };

  return (
    <main class="container">
      <Header />
      <form class="px-4 w-full" onSubmit={onSubmit}>
        {!people.length && !current && (
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">
                Add people to the list (<i>comma-separated list</i>):
              </span>
            </label>
            <div class="relative">
              <input
                type="text"
                placeholder="arthur, trillie, marvin..."
                class="w-full pr-16 input input-primary input-bordered rounded-none"
                value={typing}
                onChange={onTyping}
                autoComplete="off"
              />
              <button class="absolute top-0 right-0 rounded-none btn btn-primary text-white">
                add
              </button>
            </div>
          </div>
        )}
      </form>

      {current && (
        <section class="px-4 animate-pulse my-8">
          <Card active={true}>{current}</Card>
        </section>
      )}

      <List items={people} />

      <Footer
        visible={people.length > 0 || current !== undefined}
        next={next}
        clear={clear}
      />
    </main>
  );
};

export { App };
