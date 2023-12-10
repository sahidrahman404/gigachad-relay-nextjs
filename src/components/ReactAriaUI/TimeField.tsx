import type {
  TimeFieldProps as TimeFieldPropsAria,
  TimeValue,
  ValidationResult,
} from "react-aria-components";
import {
  DateInput,
  DateSegment,
  TimeField as TimeFieldAria,
} from "react-aria-components";

interface TimeFieldProps<T extends TimeValue> extends TimeFieldPropsAria<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function TimeField<T extends TimeValue>({
  label,
  description,
  errorMessage,
  ...props
}: TimeFieldProps<T>) {
  return (
    <TimeFieldAria {...props}>
      <DateInput className="flex items-center h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
    </TimeFieldAria>
  );
}

<TimeField label="Event time" />;

export { TimeField };
