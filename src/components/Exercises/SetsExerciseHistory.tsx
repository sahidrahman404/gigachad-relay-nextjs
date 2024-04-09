import { Input } from "../ui/input";
import { Label } from "../ui/label";

function SetsExerciseHistory({ index }: { index: number }) {
  return (
    <div className="space-y-2 col-span-1">
      <Label>Sets</Label>
      <Input disabled={true} value={index} />
    </div>
  );
}

export { SetsExerciseHistory };
