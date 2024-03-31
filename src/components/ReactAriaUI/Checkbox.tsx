import * as React from "react";
import { Check } from "lucide-react";
import { Checkbox as CheckboxAria, CheckboxProps } from "react-aria-components";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function CheckBox({ className, ...props }, ref) {
    return (
      <CheckboxAria
        ref={undefined}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          className,
        )}
        {...props}
      >
        <Check className="h-4 w-4" />
      </CheckboxAria>
    );
  },
);

export { Checkbox };
