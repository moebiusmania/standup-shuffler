import Card from "./Card";

type Props = {
  items: Array<string>;
};

const List = (props: Props): JSX.Element => {
  const items: Array<string> = props.items || [];

  return (
    <section class="px-4">
      {items.map(
        (item: string, i: number): JSX.Element => (
          <Card key={i}>{item}</Card>
        )
      )}
    </section>
  );
};

export default List;
