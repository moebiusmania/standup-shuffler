type Props = {
  visible: Boolean;
  next: () => void;
  clear: () => void;
};

const Footer = ({ visible, next, clear }: Props) => {
  return (<>
    {(visible) && (
      <footer class="shadow fixed bottom-0 left-0 w-full z-10 py-4 bg-white">
        <div class="px-4">
          <div class="btn-group w-full">
            <button class="btn btn-error rounded-none w-2/4" onClick={clear}>
              clear list
            </button>
            <button
              class="btn btn-primary rounded-none w-2/4 text-white"
              onClick={next}
            >
              next one!
            </button>
          </div>
        </div>
      </footer>
    )}
  </>)
}

export default Footer