import { ChevronDown, ChevronUp } from "lucide-react";
import {
  NumberField as NumField,
  NumberFieldProps as AriaNumberFieldProps,
  Button,
  ButtonProps,
  ValidationResult,
} from "react-aria-components";
import {
  Description,
  FieldError,
  FieldGroup,
  Input,
  Label,
  fieldBorderStyles,
} from "./Field";
import { composeTailwindRenderProps } from "@/lib/utils";

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
    <NumField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-2 justify-end",
      )}
    >
      <Label>{label}</Label>
      <FieldGroup>
        {(renderProps) => (
          <>
            <Input />
            <div
              className={fieldBorderStyles({
                ...renderProps,
                class: "flex flex-col border-s",
              })}
            >
              <StepperButton slot="increment">
                <ChevronUp aria-hidden className="w-4 h-4" />
              </StepperButton>
              <div
                className={fieldBorderStyles({
                  ...renderProps,
                  class: "border-b",
                })}
              />
              <StepperButton slot="decrement">
                <ChevronDown aria-hidden className="w-4 h-4" />
              </StepperButton>
            </div>
          </>
        )}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </NumField>
  );
}

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
