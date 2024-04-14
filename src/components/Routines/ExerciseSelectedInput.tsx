import { Image } from "../Image/Image";
import { Avatar } from "../ui/avatar";
import { Select, ListBoxItem } from "../ReactAriaUI/Select";
import { extractExerciseSelectInputValue } from "./ExerciseSelectItem";

function ExerciseSelectedInput({ value }: { value: string }) {
  const { exerciseName, exerciseImage } =
    extractExerciseSelectInputValue(value);
  return (
    <Select
      label="Exercise"
      defaultSelectedKey={value}
      className="h-12"
      isDisabled={true}
    >
      <ListBoxItem key={value} id={value} textValue={exerciseName}>
        <div className="flex items-center space-x-2">
          <Avatar className="bg-blue-500">
            {exerciseImage && <Image image={exerciseImage} />}
          </Avatar>
          <span>{exerciseName}</span>
        </div>
      </ListBoxItem>
    </Select>
  );
}

export { ExerciseSelectedInput };
