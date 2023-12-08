import { ReactNode } from "react";
import { Button } from "../ReactAriaUI/Button";

type AuthButtonParams = {
  children: ReactNode;
  isMutationInFlight: boolean;
};

export default function AuthButton({
  isMutationInFlight,
  children,
}: AuthButtonParams) {
  return (
    <Button
      type="submit"
      isDisabled={isMutationInFlight}
      className="flex w-full justify-center"
    >
      {children}
    </Button>
  );
}
