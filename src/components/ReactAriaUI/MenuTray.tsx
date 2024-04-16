import React from "react";
import {
  ModalOverlay,
  ModalOverlayProps,
  Modal as RACModal,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const overlayStyles = tv({
  base: "fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-50 bg-black/[15%] flex items-end justify-center p-4 text-center backdrop-blur-lg",
  variants: {
    isEntering: {
      true: "animate-in fade-in duration-200 ease-out",
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in",
    },
  },
});

const modalStyles = tv({
  base: "w-full max-h-full rounded-2xl bg-background forced-colors:bg-[Canvas] text-left align-middle text-primary shadow-2xl bg-clip-padding border border-black/10",
  variants: {
    isEntering: {
      true: "animate-in slide-in-from-bottom-2 ease-out duration-200",
    },
    isExiting: {
      true: "animate-out slide-out-to-bottom-2 ease-in duration-200",
    },
  },
});

function MenuTray(props: ModalOverlayProps) {
  return (
    <ModalOverlay {...props} className={overlayStyles} isDismissable>
      <RACModal {...props} className={modalStyles} />
    </ModalOverlay>
  );
}

export { MenuTray };
