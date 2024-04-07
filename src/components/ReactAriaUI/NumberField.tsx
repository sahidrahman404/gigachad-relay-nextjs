import type { NumberFieldProps, ValidationResult } from "react-aria-components";
import {
  NumberField as NumField,
  Group,
  Label,
  Input,
  FieldError,
  Text,
} from "react-aria-components";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface MyNumberFieldProps extends NumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function NumberField({
  label,
  description,
  errorMessage,
  className,
  ...props
}: MyNumberFieldProps) {
  return (
    <NumField {...props} className={cn("space-y-2", className)}>
      <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </Label>
      <Group className="flex w-full rounded data-[focus-within]:ring-2 data-[focus-within]:ring-ring">
        <Button slot="decrement" variant="outline" className="hidden md:block">
          -
        </Button>
        <Input className="flex items-center h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" />
        <Button slot="increment" variant="outline" className="hidden md:block">
          +
        </Button>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </NumField>
  );
}

export { NumberField };
