import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl } from "../ui/form";
import { SelectProps } from "@radix-ui/react-select";
import { memo, useMemo } from "react";

const restTimeList = [
  {
    value: "0",
    item: "off",
  },
  {
    value: "50",
    item: "50s",
  },
  {
    value: "60",
    item: "1min",
  },
  {
    value: "65",
    item: "1min 5s",
  },
  {
    value: "70",
    item: "1min 10s",
  },
  {
    value: "75",
    item: "1min 15s",
  },
  {
    value: "80",
    item: "1min 20s",
  },
  {
    value: "85",
    item: "1min 25s",
  },
  {
    value: "90",
    item: "1min 30s",
  },
  {
    value: "95",
    item: "1min 35s",
  },
  {
    value: "100",
    item: "1min 40s",
  },
  {
    value: "105",
    item: "1min 45s",
  },
  {
    value: "110",
    item: "1min 50s",
  },
  {
    value: "115",
    item: "1min 55s",
  },
  {
    value: "120",
    item: "2min",
  },
  {
    value: "125",
    item: "2min 5s",
  },
  {
    value: "130",
    item: "2min 10s",
  },
  {
    value: "135",
    item: "2min 15s",
  },
  {
    value: "140",
    item: "2min 20s",
  },
  {
    value: "145",
    item: "2min 25s",
  },
  {
    value: "150",
    item: "2min 30s",
  },
  {
    value: "155",
    item: "2min 35s",
  },
  {
    value: "160",
    item: "2min 40s",
  },
  {
    value: "165",
    item: "2min 45s",
  },
  {
    value: "170",
    item: "2min 50s",
  },
  {
    value: "175",
    item: "2min 55s",
  },
  {
    value: "180",
    item: "3min",
  },
  {
    value: "185",
    item: "3min 5s",
  },
  {
    value: "190",
    item: "3min 10s",
  },
  {
    value: "195",
    item: "3min 15s",
  },
  {
    value: "200",
    item: "3min 20s",
  },
  {
    value: "205",
    item: "3min 25s",
  },
  {
    value: "210",
    item: "3min 30s",
  },
  {
    value: "215",
    item: "3min 35s",
  },
  {
    value: "220",
    item: "3min 40s",
  },
  {
    value: "225",
    item: "3min 45s",
  },
  {
    value: "230",
    item: "3min 50s",
  },
  {
    value: "235",
    item: "3min 55s",
  },
  {
    value: "240",
    item: "4min",
  },
  {
    value: "245",
    item: "4min 5s",
  },
  {
    value: "250",
    item: "4min 10s",
  },
  {
    value: "255",
    item: "4min 15s",
  },
  {
    value: "260",
    item: "4min 20s",
  },
  {
    value: "265",
    item: "4min 25s",
  },
  {
    value: "270",
    item: "4min 30s",
  },
  {
    value: "275",
    item: "4min 35s",
  },
  {
    value: "280",
    item: "4min 40s",
  },
  {
    value: "285",
    item: "4min 45s",
  },
  {
    value: "290",
    item: "4min 50s",
  },
  {
    value: "295",
    item: "4min 55s",
  },
  {
    value: "300",
    item: "5min",
  },
];

type RestTimerSelectorProps = SelectProps;

const RestTimerSelector = memo(function RestTimerSelector({
  ...props
}: RestTimerSelectorProps) {
  const rtl = useMemo(() => restTimeList, []);
  return (
    <Select {...props}>
      <FormControl>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select rest time duration" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {rtl.map((restTime) => (
          <SelectItem
            key={restTime.value.toString()}
            value={restTime.value.toString()}
          >
            {restTime.item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});

export { RestTimerSelector };
