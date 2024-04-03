import { useFormContext, useFieldArray } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { DaySelector } from "./DaySelector";
import { Button } from "../ReactAriaUI/Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { TimeField } from "../ReactAriaUI/TimeField";
import { Time, parseTime } from "@internationalized/date";
import { RoutineFormSchema } from "@/lib/zod/routineFormSchema";

function ReminderFields() {
  const [parent] = useAutoAnimate();
  const form = useFormContext<RoutineFormSchema>();
  const { fields, remove, append } = useFieldArray({
    name: "reminders",
    control: form.control,
  });
  return (
    <div className="space-y-2" ref={parent}>
      {fields.map((fields, index) => (
        <div
          key={fields.id}
          className="grid grid-cols-[45fr_45fr_10fr] gap-x-2"
        >
          <FormField
            control={form.control}
            name={`reminders.${index}.day`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Day</FormLabel>
                <DaySelector
                  value={String(field.value)}
                  onValueChange={(e) => {
                    field.onChange(e);
                  }}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`reminders.${index}.time`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Time</FormLabel>
                <TimeField
                  granularity="second"
                  value={
                    !field?.value || field.value === ""
                      ? new Time(0, 0, 0)
                      : typeof field.value === "string"
                        ? parseTime(field.value)
                        : null
                  }
                  onChange={(val) => {
                    if (val) {
                      field.onChange(val.toString());
                    }
                  }}
                />
              </FormItem>
            )}
          />
          <div className="flex items-end">
            <Button
              variant="destructive"
              onPress={() => {
                remove(index);
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
      <Button
        variant="outline"
        onPress={() => {
          append({
            day: 0,
            time: "",
          });
        }}
      >
        Add Reminder
      </Button>
    </div>
  );
}

export { ReminderFields };
