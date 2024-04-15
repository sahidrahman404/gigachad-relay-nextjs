import {
  NumberField as NumField,
  Group,
  Label,
  Input,
  FieldError,
  Text,
  NumberFieldProps as AriaNumberFieldProps,
  Button,
  ButtonProps,
  ValidationResult,
} from "react-aria-components";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function NumberField({
  label,
  description,
  errorMessage,
  ...props
}: NumberFieldProps) {
  return (
    <NumField {...props} className={cn("space-y-2", className)}>
      <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </Label>
      <Group className="flex w-full rounded data-[focus-within]:ring-2 data-[focus-within]:ring-ring">
        <Input className="flex items-center h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" />
        {stepper && (
          <div className="flex flex-col">
            <Button
              slot="increment"
              variant="outline"
              className="h-4 rounded-none w-4 data-[pressed]:bg-green-800 opacity-50"
            >
              +
            </Button>

            <Button
              slot="decrement"
              variant="outline"
              className="h-4 rounded-none w-4 data-[pressed]:bg-red-800 opacity-50"
            >
              -
            </Button>
          </div>
        )}
      </Group>
      {description && <Text slot="description">{description}</Text>}

      <FieldError>{errorMessage}</FieldError>
    </NumField>

function StepperButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="px-0.5 cursor-default text-primary pressed:bg-accent group-disabled:text-muted-foreground"
    />
  );
}

export { NumberField };
export type { NumberFieldProps };
