import { Check } from "lucide-react";
import React from "react";
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuProps as AriaMenuProps,
  MenuItemProps,
  Separator,
  SeparatorProps,
  composeRenderProps,
} from "react-aria-components";
import {
  DropdownSection,
  DropdownSectionProps,
  dropdownItemStyles,
} from "./ListBox";
import { Popover, PopoverProps } from "./Popover";
import { MenuTray } from "./MenuTray";

interface MenuProps<T> extends AriaMenuProps<T> {
  placement?: PopoverProps["placement"];
}

function Menu<T extends object>(props: MenuProps<T>) {
  return (
    <Popover placement={props.placement} className="min-w-[150px]">
      <AriaMenu
        {...props}
        className="p-1 outline outline-0 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]"
      />
    </Popover>
  );
}

interface MenuMobileProps<T> extends AriaMenuProps<T> {}

function MenuMobile<T extends object>({ ...props }: MenuMobileProps<T>) {
  return (
    <MenuTray>
      <AriaMenu
        {...props}
        className="p-1 outline outline-0 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]"
      />
    </MenuTray>
  );
}

function MenuItem(props: MenuItemProps) {
  return (
    <AriaMenuItem {...props} className={dropdownItemStyles}>
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected }) => (
          <>
            {selectionMode !== "none" && (
              <span className="flex items-center w-4">
                {isSelected && <Check aria-hidden className="w-4 h-4" />}
              </span>
            )}
            <span className="flex items-center flex-1 gap-2 font-normal truncate group-selected:font-semibold">
              {children}
            </span>
          </>
        ),
      )}
    </AriaMenuItem>
  );
}

function MenuSeparator(props: SeparatorProps) {
  return (
    <Separator
      {...props}
      className="mx-3 my-1 border-b text-muted-foreground"
    />
  );
}

function MenuSection<T extends object>(props: DropdownSectionProps<T>) {
  return <DropdownSection {...props} />;
}

export { Menu, MenuItem, MenuSeparator, MenuSection, MenuMobile };
