import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
  composeRenderProps,
} from "react-aria-components";
import { buttonStyles } from "./Button";

interface LinkButtonProps extends AriaLinkProps {
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "icon"
    | "outline"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

function LinkButton(props: LinkButtonProps) {
  return (
    <AriaLink
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        buttonStyles({
          ...renderProps,
          className,
          variant: props.variant,
          size: props.size,
        }),
      )}
    />
  );
}

export { LinkButton };
export type { LinkButtonProps };
