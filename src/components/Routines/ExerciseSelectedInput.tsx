import { Image } from "../Image/Image";
import { Avatar } from "../ui/avatar";
import { Select, SelectItem } from "../ReactAriaUI/MySelect";
import { extractExerciseSelectInputValue } from "./ExerciseSelectItem";

function ExerciseSelectedInput({ value }: { value: string }) {
  const { exerciseName, exerciseImage } =
    extractExerciseSelectInputValue(value);
  return (
    <Select
      label="Exercise"
      defaultSelectedKey={value}
      isDisabled={true}
      size="md"
    >
      <SelectItem key={value} id={value} textValue={exerciseName}>
        <div className="flex items-center space-x-2">
          <Avatar className="bg-blue-500">
            {exerciseImage && <Image image={exerciseImage} />}
          </Avatar>
          <span>{exerciseName}</span>
        </div>
      </SelectItem>
    </Select>
  );
}

export { ExerciseSelectedInput };
