import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl } from "@/components/ui/form";
import { SelectProps } from "@radix-ui/react-select";
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

type ExerciseTypeInputProps = SelectProps & {
  queryRef: ExerciseTypeInputFragment$key;
};

function ExerciseTypeInput({ queryRef, ...props }: ExerciseTypeInputProps) {
  const data = useFragment(ExerciseTypeInputFragment, queryRef);
  return (
    <Select {...props}>
      <FormControl>
        <SelectTrigger className="h-12">
          <SelectValue className="h-12" placeholder="Select exercise type" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {data.exerciseTypes?.edges?.map((et) => {
          if (et?.node) {
            return (
              <SelectItem key={et.node.id} value={et.node.id}>
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
      </SelectContent>
    </Select>
  );
}

export { ExerciseTypeInput };
