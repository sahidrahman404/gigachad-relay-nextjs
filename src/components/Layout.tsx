import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Toaster } from "./ui/toaster";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full bg-background">
      <div className="h-full grid lg:grid-cols-5">
        <Sidebar className="hidden lg:block" />
        <div className="h-full col-span-3 lg:col-span-4 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8">{children}</div>
          <Toaster />
        </div>
      </div>
    </div>
  );
}
