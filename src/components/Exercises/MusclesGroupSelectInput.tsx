import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { SelectProps } from "@radix-ui/react-select";
import { Avatar } from "../ui/avatar";
import { Image } from "../Image/Image";
import { ListBoxItem, Select } from "../ReactAriaUI/Select";
import { Text } from "react-aria-components";
import { MusclesGroupSelectInputFragment$key } from "@/queries/__generated__/MusclesGroupSelectInputFragment.graphql";

const MusclesGroupSelectInputFragment = graphql`
  fragment MusclesGroupSelectInputFragment on Query {
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

type MusclesGroupSelectInputProps = SelectProps & {
  queryRef: MusclesGroupSelectInputFragment$key;
};

function MusclesGroupSelectInput({
  queryRef,
  ...props
}: MusclesGroupSelectInputProps) {
  const data = useFragment(MusclesGroupSelectInputFragment, queryRef);
  return (
    <Select
      {...props}
      placeholder="Select primary muscles group"
      className="h-12"
      selectedKey={props.value}
      onSelectionChange={(key) => {
        if (typeof key === "string" && props.onValueChange) {
          props.onValueChange(key);
          console.log(props.value);
        }
      }}
    >
      {data.musclesGroups?.edges?.map((mg) => {
        if (mg?.node) {
          return (
            <ListBoxItem
              key={mg.node.id}
              id={mg.node.id}
              textValue={mg.node.name}
            >
              <div className="flex items-center space-x-2">
                <Avatar>
                  {mg.node.image && <Image image={mg.node.image} />}
                </Avatar>
                <Text slot="description">{mg.node.name}</Text>
              </div>
            </ListBoxItem>
          );
        }
      })}
    </Select>
  );
}

export { MusclesGroupSelectInput };
