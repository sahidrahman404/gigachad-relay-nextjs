import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { useEffect, useState } from "react";
import { Button } from "../ReactAriaUI/Button";
import { useTimer } from "../Hooks/useTimer";
import { useGetTimerLabel } from "../Hooks/useGetTimerLabel";
import { TimerProgress } from "./TimerProgress";

function TimerDialog() {
  const { isTimerRunning } = useTimer();
  const [open, setOpen] = useState(isTimerRunning);

  useEffect(() => {
    if (isTimerRunning) {
      setOpen(true);
    }

    if (!isTimerRunning) {
      setOpen(false);
    }
  }, [isTimerRunning]);

  const { type } = useGetTimerLabel();

  return (
    <DialogTrigger isOpen={open} onOpenChange={setOpen}>
      <Button className="hidden"></Button>
      <ModalOverlay
        className={({ isEntering, isExiting }) => `
          fixed inset-0 z-50 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
      >
        <Modal
          className={({ isEntering, isExiting }) => `
            w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
          `}
        >
          <Dialog role="dialog" className="outline-none relative">
            {({ close }) => (
              <div className="space-y-4">
                {type === "REST" && (
                  <p>Take a break, and get ready to crush your next move!</p>
                )}
                <TimerProgress />
                <Button onPress={close}>Close</Button>
              </div>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

export { TimerDialog };
