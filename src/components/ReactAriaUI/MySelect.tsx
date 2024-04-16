import { ChevronDown } from "lucide-react";
import {
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  Button,
  ListBox,
  ListBoxItemProps,
  SelectValue,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, Label } from "./Field";
import { DropdownItem, DropdownSection, DropdownSectionProps } from "./ListBox";
import { Popover } from "./Popover";
import { composeTailwindRenderProps, focusRing } from "@/lib/utils";

const styles = tv({
  extend: focusRing,
  base: "flex items-center text-start gap-4 w-full cursor-default border border-border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] rounded-lg pl-3 pr-2 py-2 min-w-[150px] transition bg-transparent",
  variants: {
    isDisabled: {
      false:
        "text-primary hover:text-primary/60 pressed:text-primary/50 group-invalid:border-red-600 forced-colors:group-invalid:border-[Mark]",
      true: "opacity-50 forced-colors:text-[GrayText] forced-colors:border-[GrayText]",
    },
    size: {
      md: "h-12",
    },
  },
});

interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  size?: "md";
}

function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  size,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-2 justify-end",
      )}
    >
      {label && <Label>{label}</Label>}
      <Button className={({ isDisabled }) => styles({ size, isDisabled })}>
        <SelectValue className="flex-1 text-sm placeholder-shown:italic" />
        <ChevronDown
          aria-hidden
          className="w-4 h-4 text-gray-600 dark:text-zinc-400 forced-colors:text-[ButtonText] group-disabled:text-gray-200 dark:group-disabled:text-zinc-600 forced-colors:group-disabled:text-[GrayText]"
        />
      </Button>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="min-w-[--trigger-width]">
        <ListBox
          items={items}
          className="outline-none p-1 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

function SelectItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}

function SelectSection<T extends object>(props: DropdownSectionProps<T>) {
  return <DropdownSection {...props} />;
}

export { Select, SelectItem, SelectSection };
export type { SelectProps };
