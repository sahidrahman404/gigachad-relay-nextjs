import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import {
  SelectProps,
  Select,
  SelectItem,
} from "@/components/ReactAriaUI/MySelect";
import { ExerciseTypeInputFragment$key } from "@/queries/__generated__/ExerciseTypeInputFragment.graphql";

const ExerciseTypeInputFragment = graphql`
  fragment ExerciseTypeInputFragment on Query {
    exerciseTypes {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;

type ExerciseTypeInputProps<T extends object> = Omit<
  SelectProps<T>,
  "children" | "ref"
> & {
  queryRef: ExerciseTypeInputFragment$key;
};

function ExerciseTypeInput<T extends object>({
  queryRef,
  ...props
}: ExerciseTypeInputProps<T>) {
  const data = useFragment(ExerciseTypeInputFragment, queryRef);
  return (
    <Select
      {...props}
      size="md"
      placeholder="Please select an exercise type"
      aria-label="exercise type selection"
    >
      {data.exerciseTypes?.edges?.map((et) => {
        if (et?.node) {
          return (
            <SelectItem
              key={et.node.id}
              id={et.node.id}
              textValue={et.node.name}
            >
              <div className="flex flex-col gap-0.5 items-start">
                <h3 className="text-primary font-medium">{et.node.name}</h3>
                <p>
                  <span>Example: </span>
                  {et.node.description}
                </p>
              </div>
            </SelectItem>
          );
        }
      })}
    </Select>
  );
}

export { ExerciseTypeInput };
