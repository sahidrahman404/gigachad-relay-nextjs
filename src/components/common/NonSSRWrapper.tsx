import dynamic from "next/dynamic";
import { ReactNode } from "react";

function NonSSRWrapper({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
