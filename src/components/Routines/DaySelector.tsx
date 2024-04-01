import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SelectProps } from "@radix-ui/react-select";

const days = [
  { label: "Sunday", value: "0" },
  { label: "Monday", value: "1" },
  { label: "Tuesday", value: "2" },
  { label: "Wednesday", value: "3" },
  { label: "Thursday", value: "4" },
  { label: "Friday", value: "5" },
  { label: "Saturday", value: "6" },
];

function DaySelector({ ...props }: SelectProps) {
  return (
    <Select {...props}>
      <SelectTrigger>
        <SelectValue placeholder="Select a day" />
      </SelectTrigger>
      <SelectContent>
        {days.map((day) => (
          <SelectItem value={day.value} key={day.value}>
            {day.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export { DaySelector };
