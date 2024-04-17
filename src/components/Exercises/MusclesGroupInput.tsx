import { MusclesGroupInputFragment$key } from "@/queries/__generated__/MusclesGroupInputFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import {
  SelectProps,
  Select,
  SelectItem,
} from "@/components/ReactAriaUI/MySelect";
import { Avatar } from "../ui/avatar";
import { Image } from "../Image/Image";

const MusclesGroupInputFragment = graphql`
  fragment MusclesGroupInputFragment on Query {
    musclesGroups {
      edges {
        node {
          id
          name
          image {
            ...ImageFragment
          }
        }
      }
    }
  }
`;

type MusclesGroupInputProps<T extends object> = Omit<
  SelectProps<T>,
  "children" | "ref"
> & {
  queryRef: MusclesGroupInputFragment$key;
};

function MusclesGroupInput<T extends object>({
  queryRef,
  ...props
}: MusclesGroupInputProps<T>) {
  const data = useFragment(MusclesGroupInputFragment, queryRef);
  return (
    <Select
      isDisabled={props.isDisabled}
      selectedKey={props.selectedKey}
      onSelectionChange={props.onSelectionChange}
      size="md"
      placeholder="Please select a muscles group"
      aria-label="muscles group selection"
    >
      {data.musclesGroups?.edges?.map((mg) => {
        if (mg?.node) {
          return (
            <SelectItem
              key={mg.node.id}
              id={mg.node.id}
              textValue={mg.node.name}
            >
              <div className="flex items-center space-x-2">
                <Avatar>
                  {mg.node.image && <Image image={mg.node.image} />}
                </Avatar>
                <span aria-label="hello">{mg.node.name}</span>
              </div>
            </SelectItem>
          );
        }
      })}
    </Select>
  );
}

export { MusclesGroupInput };
