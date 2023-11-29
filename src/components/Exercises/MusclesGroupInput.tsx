import { MusclesGroupInputFragment$key } from "@/queries/__generated__/MusclesGroupInputFragment.graphql";
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

type MusclesGroupInputProps = SelectProps & {
  queryRef: MusclesGroupInputFragment$key;
};

function MusclesGroupInput({ queryRef, ...props }: MusclesGroupInputProps) {
  const data = useFragment(MusclesGroupInputFragment, queryRef);
  return (
    <Select {...props}>
      <FormControl>
        <SelectTrigger className="h-12">
          <SelectValue
            className="h-12"
            placeholder="Select primary muscles group"
          />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {data.musclesGroups?.edges?.map((mg) => {
          if (mg?.node) {
            return (
              <SelectItem key={mg.node.id} value={mg.node.id}>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    {mg.node.image && <Image image={mg.node.image} />}
                  </Avatar>
                  <span>{mg.node.name}</span>
                </div>
              </SelectItem>
            );
          }
        })}
      </SelectContent>
    </Select>
  );
}

export { MusclesGroupInput };
