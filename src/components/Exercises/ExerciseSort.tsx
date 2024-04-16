import { MenuTrigger } from "react-aria-components";
import { Button } from "../ReactAriaUI/Button";
import { ArrowUpDown } from "lucide-react";
import { MenuMobile, MenuItem } from "../ReactAriaUI/Menu";
import { ExercisesFilterSortProps } from "./ExercisesFilterSort";
import { useState } from "react";

interface ExerciseSortProps
  extends Omit<
    ExercisesFilterSortProps,
    "exercisesFilterSortFragmentQueryRef"
  > {}

function ExerciseSort({
  state,
  refetch,
  dispatch,
  startTransition,
}: ExerciseSortProps) {
  const [open, setOpen] = useState(false);
  return (
    <MenuTrigger isOpen={open} onOpenChange={setOpen}>
      <Button variant="outline">
        <ArrowUpDown className="mr-2 w-4 h-4" />
        Sort
      </Button>
      <MenuMobile
        open={open}
        setOpen={setOpen}
        onAction={(key) => {
          if (key === "Desc") {
            startTransition(() => {
              refetch({
                orderby: "DESC",
                exerciseTypeWhereInput:
                  state.exerciseType.length !== 29
                    ? []
                    : { id: state.exerciseType },
                musclesGroupWhereInput:
                  state.musclesGroup.length !== 29
                    ? []
                    : { id: state.musclesGroup },
              });
            });
          }
          if (key === "Asc") {
            startTransition(() => {
              refetch({
                orderby: "ASC",
                exerciseTypeWhereInput:
                  state.exerciseType.length !== 29
                    ? []
                    : { id: state.exerciseType },
                musclesGroupWhereInput:
                  state.musclesGroup.length !== 29
                    ? []
                    : { id: state.musclesGroup },
              });
            });
          }
        }}
        selectionMode="single"
        selectedKeys={state.orderDirection}
        onSelectionChange={(value) => {
          dispatch({
            type: "set_order_direction",
            payload: value,
          });
        }}
      >
        <MenuItem id="Desc">Newest</MenuItem>
        <MenuItem id="Asc">Oldest</MenuItem>
      </MenuMobile>
    </MenuTrigger>
  );
}

export { ExerciseSort };
