import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Toaster } from "./ui/toaster";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background">
      <div className="hd-screen grid lg:grid-cols-5">
        <Sidebar className="hidden lg:block" />
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="px-4 py-6 lg:px-8">{children}</div>
          <Toaster />
        </div>
      </div>
    </div>
  );
}
