import { forwardRef } from "react";
import { Player } from "../../common/types";
import Button from "./Button";

type DialogProps = {
  player: Player,
  onCancel: () => void,
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ player, onCancel }, ref) => {
  return (
    <dialog ref={ref} className='mx-auto my-auto text-center py-4 backdrop:bg-black/70 border w-[500px] rounded-xl'>
      <p className="text-3xl my-10">Player <span className="font-bold">{player.toUpperCase()}</span> wins!</p>
      <Button onClick={onCancel}>Close</Button>
    </dialog>
  );
});

export default Dialog;