import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type LoadingSpinnerProps = {
  className?: string;
};

function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return <Loader2 className={cn("animate-spin", className)} />;
}
export { LoadingSpinner };
