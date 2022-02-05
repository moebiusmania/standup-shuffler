type Props = {
  active?: Boolean;
  children: string;
};

const Card = (props: Props): JSX.Element => {
  const classes: string = "card shadow compact rounded-none my-5";
  const isActive: string = props.active
    ? `${classes} bg-primary text-white`
    : classes;

  return (
    <div class={isActive}>
      <div class="card-body">
        <div class="flex">
          <div class="flex-shrink-0 mr-3">
            <img
              class="h-9 w-9"
              src={`https://avatars.dicebear.com/api/bottts/${props.children}.svg`}
              alt={props.children}
            />
          </div>
          <div class="flex-grow">
            <p class="capitalize text-2xl">{props.children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
