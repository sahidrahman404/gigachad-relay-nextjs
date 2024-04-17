import { MenuTrigger } from "react-aria-components";
import { Button } from "../ReactAriaUI/Button";
import { ArrowUpDown } from "lucide-react";
import { MenuResponsive, MenuItem } from "../ReactAriaUI/Menu";
import { ExercisesFilterSortProps } from "./ExercisesFilterSort";
import { useState } from "react";
import NonSSRWrapper from "../common/NonSSRWrapper";

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
      <NonSSRWrapper>
        <MenuResponsive
          open={open}
          setOpen={setOpen}
          onAction={(key) => {
            if (key === "DESC") {
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
            if (key === "ASC") {
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
          <MenuItem id="DESC">Newest</MenuItem>
          <MenuItem id="ASC">Oldest</MenuItem>
        </MenuResponsive>
      </NonSSRWrapper>
    </MenuTrigger>
  );
}

export { ExerciseSort };
