import { ReactNode, useContext } from "react";
import {
  Dialog,
  Modal,
  DialogTrigger,
  ModalOverlay,
  OverlayTriggerStateContext,
} from "react-aria-components";
import type { DialogTriggerProps } from "react-aria-components";
import { Button, ButtonProps } from "./Button";

interface MyDialogProps extends Omit<DialogTriggerProps, "children"> {
  Button: ReactNode;
  children: ReactNode;
  role?: "dialog" | "alertdialog";
}

function MyDialog({
  Button,
  children,
  role = "dialog",
  ...props
}: MyDialogProps) {
  return (
    <DialogTrigger {...props}>
      {Button}
      <ModalOverlay
        className={({ isEntering, isExiting }) => `
          fixed inset-0 z-50 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
        isDismissable
      >
        <Modal
          className={({ isEntering, isExiting }) => `
            w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
          `}
        >
          <Dialog role={role} className="outline-none">
            {children}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

interface CloseButtonProps extends Omit<ButtonProps, "children" | "onPress"> {
  children: string;
}

function CloseButton({ children, ...props }: CloseButtonProps) {
  let state = useContext(OverlayTriggerStateContext)!;
  return (
    <Button onPress={() => state.close()} {...props}>
      {children}
    </Button>
  );
}

export { MyDialog, CloseButton };
export type { MyDialogProps };
