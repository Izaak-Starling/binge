import {LuAngry} from "react-icons/lu";

const SwipeButton = (props: { onSwipe: () => void }) => {
  return (
      // TODO: Fix this button being a rectangle
      <button onClick={props.onSwipe}>
        <div className="fixed bottom-0 left-0 box-border bg-binge-off-white bg-origin-padding drop-shadow aspect-square rounded-full ml-8 mb-8">
          <div className="p-3">
            <LuAngry size="1.5em"/>
          </div>
        </div>
      </button>
  );
}

export default SwipeButton;