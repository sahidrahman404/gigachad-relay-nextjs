import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Toaster } from "./ui/sonner";
import { createActorContext } from "@xstate/react";
import { workoutMachine } from "@/lib/states/workoutMachine";
import { Header } from "./Header";

const WorkoutMachineContext = createActorContext(workoutMachine);

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <WorkoutMachineContext.Provider>
      <div className="bg-background">
        <Header />
        <div className="hd-screen grid lg:grid-cols-5">
          <Sidebar className="hidden lg:block" />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="px-4 py-6 lg:px-8">{children}</div>
            <Toaster richColors />
          </div>
        </div>
      </div>
    </WorkoutMachineContext.Provider>
  );
}

export { WorkoutMachineContext };
