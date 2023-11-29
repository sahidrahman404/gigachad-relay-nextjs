import { MusclesGroupFragment$key } from "@/queries/__generated__/MusclesGroupFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Image } from "../Image/Image";
import { Avatar } from "../ui/avatar";

const MusclesGroupFragment = graphql`
  fragment MusclesGroupFragment on Query {
    musclesGroups(first: 100) @connection(key: "test__musclesGroups") {
      __id
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

function MusclesGroup({ query }: { query: MusclesGroupFragment$key }) {
  const data = useFragment(MusclesGroupFragment, query);
  return (
    <div>
      {data.musclesGroups?.edges?.map((mg) => {
        if (mg?.node?.id) {
          return (
            <div key={mg.node.id}>
              <p>{mg.node.name}</p>
              <Avatar className="w-20 h-20">
                {mg.node.image && <Image image={mg.node.image} />}
              </Avatar>
            </div>
          );
        }
      })}
    </div>
  );
}

export { MusclesGroup, MusclesGroupFragment };
