import type {
  MenuItemProps,
  MenuProps,
  MenuTriggerProps,
} from "react-aria-components";
import { MenuTrigger, Popover, Menu, MenuItem } from "react-aria-components";
import { Button } from "./Button";
import { ReactNode } from "react";

interface MyMenuButtonProps<T>
  extends MenuProps<T>,
    Omit<MenuTriggerProps, "children"> {
  label?: ReactNode;
}

function MyMenuButton<T extends object>({
  label,
  children,
  ...props
}: MyMenuButtonProps<T>) {
  return (
    <MenuTrigger {...props}>
      <Button variant="outline" size="icon">
        {label}
      </Button>
      <Popover
        className={({ isEntering, isExiting, placement }) =>
          `z-50 overflow-hidden rounded-md border bg-popover p-1 
          text-popover-foreground shadow-md
          ${isEntering && "animate-in fade-in-0 zoom-in-95"}
          ${isExiting && "fade-out-0 zoom-out-95"}
          ${placement === "bottom" && "slide-in-from-top-2"}
          ${placement === "left" && "slide-in-from-right-2"}
          ${placement === "right" && "slide-in-from-left-2"}
          ${placement === "top" && "slide-in-from-bottom-2"}
          `
        }
      >
        <Menu {...props} className="outline-none">
          {children}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

interface MyItemProps extends MenuItemProps {
  destructive?: boolean;
}

function MyItem({ destructive = false, ...props }: MyItemProps) {
  let textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);
  return (
    <MenuItem
      {...props}
      textValue={textValue}
      className={({ isFocused, isSelected, isOpen, isDisabled }) =>
        `flex items-center m-0.5 rounded-sm outline-none cursor-default 
         relative text-sm py-1 px-3
         ${isDisabled && "text-muted-foreground"}
         ${destructive && "text-destructive"}
         ${isFocused && destructive ? "bg-destructive text-destructive-foreground" : ""}
         ${isOpen && destructive ? "bg-destructive text-destructive-foreground" : ""}
         ${isFocused && !destructive ? "bg-accent text-accent-foreground" : ""}
         ${isOpen && !destructive ? "bg-accent text-accent-foreground" : ""}`
      }
    >
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && (
            <svg className="chevron" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </>
      )}
    </MenuItem>
  );
}

export { MyMenuButton, MyItem };
