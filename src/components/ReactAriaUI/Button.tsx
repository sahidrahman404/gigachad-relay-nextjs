import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "@/lib/utils";
import { ForwardedRef, forwardRef } from "react";

export interface ButtonProps extends RACButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "icon"
    | "outline"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const buttonStyles = tv({
  extend: focusRing,
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors outline-none",
  variants: {
    variant: {
      primary:
        "bg-primary hover:bg-primary/80 pressed:bg-primary/70 text-primary-foreground shadow",
      secondary:
        "bg-secondary hover:bg-secondary/80 pressed:bg-secondary/60 text-secondary-foreground shadow-sm",
      destructive:
        "bg-destructive hover:bg-destructive/80 pressed:bg-destructive/70 text-destructive-foreground shadow-sm",
      icon: "text-primary-foreground hover:bg-primary/[5%] pressed:bg-primary/10 disabled:bg-transparent",
      outline:
        "border border-input bg-transparent hover:bg-accent/50 pressed:bg-accent text-accent-foreground shadow-sm",
      ghost: "hover:bg-accent/80 pressed:bg-accent text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
    isDisabled: {
      true: "pointer-events-none opacity-50",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

const Button = forwardRef(function Button(
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <RACButton
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        buttonStyles({
          ...renderProps,
          variant: props.variant,
          size: props.size,
          className,
        }),
      )}
    />
  );
});

export { Button, buttonStyles };
