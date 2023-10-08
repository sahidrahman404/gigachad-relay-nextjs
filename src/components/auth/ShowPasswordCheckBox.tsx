import { Dispatch, SetStateAction } from "react";
import { Checkbox } from "../ui/checkbox";

type ShowPasswordCheckBoxParams = {
  showPassword: boolean, 
  setShowPassword: Dispatch<SetStateAction<boolean>>
}

export function ShowPasswordCheckBox({showPassword, setShowPassword}: ShowPasswordCheckBoxParams) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="showPasswordToggle"
        checked={showPassword}
        onClick={() => {
          setShowPassword((showState) => !showState);
        }}
      />
      <label
        htmlFor="showPasswordToggle"
        className="text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Show Password
      </label>
    </div>
  );
}
