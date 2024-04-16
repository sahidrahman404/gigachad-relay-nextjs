import { Dispatch, ReactNode, SetStateAction } from "react";
import { ModalOverlay, ModalOverlayProps, Modal } from "react-aria-components";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const MotionModal = motion(Modal);
const MotionModalOverlay = motion(ModalOverlay);

const inertiaTransition = {
  type: "inertia" as const,
  bounceStiffness: 300,
  bounceDamping: 40,
  timeConstant: 300,
};

const staticTransition = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1],
};

interface MenuTrayProps extends Omit<ModalOverlayProps, "children"> {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

function MenuTray({ open, setOpen, children, ...props }: MenuTrayProps) {
  const SHEET_MARGIN = Math.round(window.innerHeight * 0.65);
  const h = Math.round(window.innerHeight * 0.35);
  const y = useMotionValue(h);
  const bgOpacity = useTransform(y, [0, h], [0.4, 0]);
  const bg = useMotionTemplate`rgba(0, 0, 0, ${bgOpacity})`;

  return (
    <AnimatePresence>
      {open && (
        <MotionModalOverlay
          {...props}
          isOpen={open}
          onOpenChange={setOpen}
          className="fixed inset-0 z-50"
          style={{ backgroundColor: bg as any }}
          isDismissable
        >
          <MotionModal
            {...props}
            className="bg-background absolute bottom-0 w-full rounded-t-xl shadow-lg will-change-transform"
            initial={{ y: h }}
            animate={{ y: 0 }}
            exit={{ y: h }}
            transition={staticTransition}
            style={{
              y,
              top: SHEET_MARGIN,
              // Extra padding at the bottom to account for rubber band scrolling.
              paddingBottom: window.screen.height,
            }}
            drag="y"
            dragConstraints={{ top: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.y > window.innerHeight * 0.75 || velocity.y > 10) {
                setOpen(false);
              } else {
                animate(y, 0, { ...inertiaTransition, min: 0, max: 0 });
              }
            }}
          >
            <div className="mx-auto w-12 mt-2 h-1.5 rounded-full bg-gray-400" />
            {children}
          </MotionModal>
        </MotionModalOverlay>
      )}
    </AnimatePresence>
  );
}

export { MenuTray };
