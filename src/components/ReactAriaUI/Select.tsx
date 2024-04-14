import { cn } from "@/lib/utils";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";
import type {
  ListBoxItemProps,
  SelectProps,
  ValidationResult,
} from "react-aria-components";
import {
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem as AriaListBoxItem,
  Popover,
  Select as AriaSelect,
  Text,
  SelectValue,
} from "react-aria-components";

interface MySelectProps<T extends object>
  extends Omit<SelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  className?: string;
}

function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  className,
  ...props
}: MySelectProps<T>) {
  return (
    <AriaSelect {...props} className="space-y-2">
      <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </Label>
      <Button
        className={cn(
          "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
          className,
        )}
      >
        <SelectValue />
        <CaretSortIcon aria-hidden="true" className="h-4 w-4 opacity-50" />
      </Button>
      {description && (
        <Text slot="description" className="text-sm">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <Popover
        className={({ placement }) =>
          cn(
            "relative z-50 max-h-96 w-[--trigger-width] overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md entering:animate-in exiting:animate-out exiting:fade-out-0 entering:fade-in-0 exiting:zoom-out-95 entering:zoom-in-95",
            placement === "bottom" &&
              "data-[side=bottom]:translate-y-1 slide-in-from-top-2",
            placement === "left" &&
              "data-[side=left]:-translate-x-1 slide-in-from-right-2",
            placement === "right" &&
              "data-[side=right]:translate-x-1 slide-in-from-left-2",
            placement === "top" &&
              "data-[side=top]:-translate-y-1 slide-in-from-bottom-2",
          )
        }
      >
        <ListBox className="p-1 outline-none" items={items}>
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

function ListBoxItem({ children, ...props }: ListBoxItemProps) {
  return (
    <AriaListBoxItem
      {...props}
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground selected:bg-accent selected:text-accent-foreground disabled:pointer-events-none disabled:opacity-50`}
    >
      {({ isSelected }) => (
        <>
          {isSelected && (
            <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
              <CheckIcon className="h-4 w-4" />
            </span>
          )}
          {children}
        </>
      )}
    </AriaListBoxItem>
  );
}

export { Select, ListBoxItem };
