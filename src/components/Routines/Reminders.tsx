import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Dispatch, SetStateAction } from "react";
import { ReminderFields } from "./ReminderFields";
import { cn } from "@/lib/utils";

type RemindersProps = {
  className?: string;
  sendReminder: boolean;
  setSendReminder: Dispatch<SetStateAction<boolean>>;
};

function Reminders({
  className,
  sendReminder,
  setSendReminder,
}: RemindersProps) {
  return (
    <Card className={cn("space-y-2", className)}>
      <CardHeader>
        <CardTitle>Reminders</CardTitle>
      </CardHeader>
      <CardContent>{sendReminder && <ReminderFields />}</CardContent>
      <CardFooter>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={sendReminder}
            onCheckedChange={(s) => {
              typeof s === "boolean" && setSendReminder(s);
            }}
          />
          <Label htmlFor="terms">Send me weekly reminder</Label>
        </div>
      </CardFooter>
    </Card>
  );
}

export { Reminders };
