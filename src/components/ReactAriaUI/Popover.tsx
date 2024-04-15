import {
  OverlayArrow,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  composeRenderProps,
} from "react-aria-components";
import React from "react";
import { tv } from "tailwind-variants";

export interface PopoverProps extends Omit<AriaPopoverProps, "children"> {
  showArrow?: boolean;
  children: React.ReactNode;
}

const styles = tv({
  base: "bg-popover shadow-md rounded-md bg-clip-padding border border-black/10 text-popover-foreground",
  variants: {
    isEntering: {
      true: "animate-in fade-in placement-bottom:slide-in-from-top-2 placement-top:slide-in-from-bottom-2 placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 ease-out duration-200",
    },
    isExiting: {
      true: "animate-out fade-out placement-bottom:slide-out-to-top-2 placement-top:slide-out-to-bottom-2 placement-left:slide-out-to-right-2 placement-right:slide-out-to-left-2 ease-in duration-150",
    },
  },
});

function Popover({ children, showArrow, className, ...props }: PopoverProps) {
  return (
    <AriaPopover
      offset={showArrow ? 12 : 8}
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        styles({ ...renderProps, className }),
      )}
    >
      {showArrow && (
        <OverlayArrow className="group">
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            className="block fill-white dark:fill-[#1f1f21] forced-colors:fill-[Canvas] stroke-1 stroke-black/10 dark:stroke-zinc-600 forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </AriaPopover>
  );
}

export { Popover };
