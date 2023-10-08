import { ReactNode } from "react";
import { Button } from "../ui/button";

type AuthButtonParams = {
  children: ReactNode
  isMutationInFlight: boolean
}

export default function AuthButton({isMutationInFlight, children}: AuthButtonParams) {
  return (
    <Button type="submit" disabled={isMutationInFlight} className="flex w-full justify-center">
      {children}
    </Button>
  )
}
